import React, { useState, useEffect } from 'react';
import { dataRef, database } from '../firebase';
import Navbar from './navBar';
import { Button, FormControl, Divider, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Here Fetch real-time data and update state
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

        // Here we Clean up the listener when the component unmounts
        return () => {
            dataRef.off('value');
        };
    }, []);

    //Here we redirect to HomePage.
    const navigate = useNavigate()
    const onHomePage = () => {
        navigate('/')
    }

    const deleteRecord = (recordKey) => {
        const recordRef = database.ref('/composeteamform/' + recordKey);
        recordRef.remove()
          .then(() => {
            console.log('Record deleted successfully',database);
          })
          .catch((error) => {
            console.error('Error deleting record:', error);
          });
          console.log('!!!!!!!!',database);
      };

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
        setData(finalarr);
    }

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                margin: '10px',
                // padding: '14px',
                width: '58%',
                // border: '1px solid #C7BEBC',
                placeitems: 'center',
            }}>
                <h1>Player Details</h1>
                <FormControl sx={{ m: 1, margin: '14px', width: '200px' }}>
                    <Select
                        //   onChange={handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem><em>None</em></MenuItem>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                <td key={item.FirstName}>{item.FirstName}</td>
                                <td key={item.LastName}>{item.LastName}</td>
                                <td key={item.Height}>{item.Height}</td>
                                <td key={item.Position}>{item.Position}</td>
                                <td>
                                    <button id={index} onClick={() => deleteRecord(item.id)}>Delete</button>
                                    <button id={index}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Divider></Divider>
                <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={onHomePage} >Back</Button>
            </div>
        </>
    )
}
export default Display;
