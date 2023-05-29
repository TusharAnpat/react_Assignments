import React, { useState, useEffect } from 'react';
import { dataRef ,database} from '../firebase';
import Navbar from './navBar';
import { Button } from '@mui/material';

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
    return (
        <>
            <Navbar />
            <div>
                <h1>Player Details</h1>
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
                <Button sx={{ m: 2 }} variant="contained" size="medium" >Back</Button>
            </div>
        </>
    )
}
export default Display;
