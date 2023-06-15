import React, { useState, useEffect } from 'react';
import { dataRef, database } from '../firebase';
import Navbar from './navBar';
import { Button, FormControl, Divider, MenuItem, Select, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';

const Display = (props) => {
    const {data, setData} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [recordIndex, setIndex] = useState()
    const [user, setUser] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });
    let disabelPlaceHolder = false;

    const handleEditClick = (index) => {
        setIsEditing(true);
        setIndex(index);
    };

    let id, value;
    const setFieldsHandler = (e) => {
        id = e.target.id;
        value = e.target.value;
        setUser({ ...user, [id]: value });
        console.log('user', user);
    }

    useEffect(() => {
        // Fetch real-time data and update state
        dataRef.on('value', (snapshot) => {
            const fetchedData = snapshot.val();
            console.log("Fetched data--->", fetchedData)
            const dataArray = Object.entries(fetchedData).map(([key, value]) => ({
                id: key,
                ...value,
            }));

            console.log("Final Data Array--->", dataArray)
            setData(dataArray);
        });

        // Clean up the listener when the component unmounts
        return () => {
            dataRef.off('value');
        };
    }, []);

    // redirect to HomePage.
    const navigate = useNavigate()
    const onHomePage = () => {
        navigate('/')
    }

    const FormdataPdf = () => {
        navigate('/FormDataPdf')
      };

    const deleteRecord = (recordKey) => {
        alert('Are you Sure you want to delete record')
        const recordRef = database.ref('/composeteamform/' + recordKey);
        recordRef.remove()
            .then(() => {
                console.log('Record deleted successfully', database);
            })
            .catch((error) => {
                console.error('Error deleting record:', error);
            });
        console.log('!!!!!!!!', database);
    };

    const RemoveDuplicateRecord = () => {
        let uniqueArray = Array.from(new Set(data.map(obj => obj.FirstName))).map(firstName => {
            return data.find(obj => obj.FirstName === firstName);
        });
        console.log(uniqueArray);
        setData(uniqueArray);
    }

    const SaveUpdatedRecord = (recordKey) => {
        const recordRef = database.ref('/composeteamform/' + recordKey);
        recordRef.update(user)
            .then(() => {
                console.log('Record updated successfully', database);
                alert('Record Updated Successfully');
                setUser({ FirstName: '', LastName: '', Height: '', Position: '' });
                setIsEditing(false);
            })
            .catch((error) => {
                console.error('Error to update record:', error);
            });
        console.log('!!!!!!!!', database);
    }

    const sortAscendingOrder = () => {
        let finalarr = [...data].sort((a, b) => {
            const nameA = a.FirstName.toLowerCase();
            const nameB = b.FirstName.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }
        )
        console.log('sort data', finalarr)
        setData([...finalarr]);
    }

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                margin: '10px',
                width: '58%',
                placeitems: 'center',
            }}>
                <h1>Player Details</h1>
                <FormControl sx={{ m: 1, margin: '14px', width: '200px' }}>
                    <InputLabel id="demo-simple-select-label">Filters</InputLabel>
                    <Select
                        label="Filters"
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value='RemoveDuplicateRecord' onClick={RemoveDuplicateRecord}>unique record</MenuItem>
                        <MenuItem value="sortAscendingOrder" onClick={sortAscendingOrder}>sortByFirstName</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <table style={{ textalign: 'center', margin: '10px', padding: '14px', width: '60%', border: '1px solid #C7BEBC' }}>
                    <thead style={{ backgroundColor: "#1976d2", color: 'white' }}>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Height</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                <td key={item.FirstName}>
                                    {isEditing && index === recordIndex ? (
                                        <input
                                            type="text"
                                            id='FirstName'
                                            value={user.FirstName}
                                            onChange={setFieldsHandler}
                                            placeholder={`${disabelPlaceHolder ? " " : item.FirstName}`}
                                        />
                                    ) : (
                                        item.FirstName
                                    )}
                                </td>
                                <td key={item.LastName}>
                                    {isEditing && index === recordIndex ? (
                                        <input
                                            type="text"
                                            id='LastName'
                                            value={user.LastName}
                                            onChange={setFieldsHandler}
                                            placeholder={`${disabelPlaceHolder ? " " : item.LastName}`}
                                        />
                                    ) : (
                                        item.LastName
                                    )}
                                </td>
                                <td key={item.Height}>

                                    {isEditing && index === recordIndex ? (
                                        <input
                                            type='text'
                                            id='Height'
                                            value={user.Height}
                                            onChange={setFieldsHandler}
                                            placeholder={`${disabelPlaceHolder ? " " : item.Height}`}
                                        />
                                    ) : (
                                        item.Height)}
                                </td>
                                <td key={item.Position}>
                                    {isEditing && index === recordIndex ? (
                                        <input
                                            type='text'
                                            id='Position'
                                            value={user.Position}
                                            onChange={setFieldsHandler}
                                            placeholder={`${disabelPlaceHolder ? " " : item.Position}`}
                                        />
                                    ) : (
                                        item.Position
                                    )}
                                </td>
                                <td>
                                    {isEditing && index === recordIndex ? (
                                        <>
                                            <button onClick={() => { SaveUpdatedRecord(item.id) }}>Save</button>
                                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button id={index} onClick={() => deleteRecord(item.id)}>Delete</button>
                                            <button onClick={() => handleEditClick(index)}>Edit</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={onHomePage} >Back</Button>
                <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={FormdataPdf}>PDf</Button>
                <Divider></Divider>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Display;
