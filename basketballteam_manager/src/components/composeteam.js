import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Navbar from './navBar'
import Grid from '@mui/material/Grid';
import '../App.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Createcomposeteam({formDetails,setFormDetails}) {

    // const [formDetails, setFormDetails] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });
    const [errorMsg, setErrorMsg] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });

    const setNameHandler = (e) => {
        setFormDetails((preState) => {
            if (e.target.value.trim().length < 1) {
                setErrorMsg({ ...errorMsg, FirstName: "*Required FirstName" })
            }
            else {
                let FirstName = e.target.value;
                FirstName.replace(/[\sA-Za-z]/g, "") ? setErrorMsg({ ...errorMsg, FirstName: "*Number and Special Char. are not allowed" }) : setErrorMsg({ ...errorMsg, FirstName: "" })
            }
            return { ...preState, FirstName: e.target.value }
        })
    }

    const setLastNameHandler = (e) => {
        setFormDetails((preState) => {
            if (e.target.value.trim().length < 1) {
                setErrorMsg({ ...errorMsg, LastName: "*Required LastName" })
            }
            else {
                let LastName = e.target.value;
                LastName.replace(/[\sA-Za-z]/g, "") ? setErrorMsg({ ...errorMsg, LastName: "*Number and Special Charactor are not allowed" }) : setErrorMsg({ ...errorMsg, LastName: "" })
            }
            return { ...preState, LastName: e.target.value }
        })
    }

    const setHeightHandler = (e) => {

        setFormDetails((preState) => {
            if (e.target.value.trim().length < 1) {
                setErrorMsg({ ...errorMsg, Height: "*Required Height" })
            }
            else {
                isNaN(e.target.value) ? setErrorMsg({ ...errorMsg, Height: "*Height must be a Number" }) : setErrorMsg({ ...errorMsg, Height: "" })
            }
            return { ...preState, Height: e.target.value }
        })

    }

    const setPositionHandler = (e) => {
        setFormDetails((preState) => {
            if (e.target.value.trim().length < 1) {
                setErrorMsg({ ...errorMsg, Position: "*Required Position" })
            }
            else {
                setErrorMsg({ ...errorMsg, Position: "" })
            }
            return { ...preState, Position: e.target.value }
        })
    }

    function resetForm() {
        setFormDetails({ FirstName: '', LastName: '', Height: '', Position: '' });
        setErrorMsg({ FirstName: '', LastName: '', Height: '', Position: '' })
    }

    function submit(e) {

        console.log("IN Submit Call")
        if (formDetails.FirstName.length === 0 || formDetails.LastName.length === 0 || formDetails.Height.length === 0 || formDetails.Position.length === 0) {
            console.log("In IF block")
            if (formDetails.FirstName.length === 0 && formDetails.LastName.length === 0 && formDetails.Height.length === 0 && formDetails.Position.length === 0) {
                console.log("In IF block 2")
                setErrorMsg({ FirstName: '*Required FirstName', LastName: '*Required LastName', Height: '*Required Height', Position: '*Required Position' })
            }
            else if (formDetails.FirstName.length === 0) {
                console.log("In IF block 3")
                setErrorMsg({ ...errorMsg, FirstName: "*Required FirstName" })
            }
            else if (formDetails.LastName.length === 0) {
                console.log("In IF block 4")
                setErrorMsg({ ...errorMsg, LastName: "*Required LastName" })
            }
            else if (formDetails.Height.length === 0) {
                console.log("In IF block 5")
                setErrorMsg({ ...errorMsg, Height: "*Required Height" })
            } else if (formDetails.Position.length === 0) {
                console.log("In IF block 5")
                setErrorMsg({ ...errorMsg, Position: "*Required Position" })
            }
        } else {
            console.log("form details", formDetails);
            alert("Data Added Successfully")
            // console.log(formDetails.FirstName, " = ", formDetails.LastName, " = ", formDetails.Height, " = ", formDetails.Position);
        }
    }

    return (
        <div>
            <Navbar />
            <Container maxWidth="md" >
                <form className='form'>
                    <Grid container spacing={1}>
                        <div style={{
                            display: 'inline-flex',
                            marginTop: '25px',
                            paddingtop: '14px',
                            width: 700,
                            height: '400px',
                            border: '1px solid #C7BEBC'
                        }}>
                            <Grid container item xs={8} style={{ display: 'grid', margin: '2px' }}>
                                <div style={{display: 'block', margin: '15px'}}>

                                <div >
                                    <TextField className='textBox'
                                        // error={!!errorMsg.FirstName}
                                        type="text"
                                        value={formDetails.FirstName}
                                        onChange={setNameHandler}
                                        variant="standard"
                                        label="First Name"
                                        size="small"
                                        required
                                    />

                                    {errorMsg.FirstName && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.FirstName}</span>}
                                </div>
                                <div >
                                    <TextField className='textBox'
                                        // error={!!errorMsg.LastName}
                                        type="text" value={formDetails.LastName} onChange={setLastNameHandler}
                                        label="Last Name"
                                        variant="standard"
                                        size="small"
                                        required
                                    />
                                    {errorMsg.LastName && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.LastName}</span>}
                                </div>
                                <div>
                                    <TextField className='textBox'
                                        // error={!!errorMsg.Height}
                                        type="text" value={formDetails.Height} onChange={setHeightHandler}
                                        label="Height"
                                        variant="standard"
                                        size="small"
                                        required
                                    />
                                    {errorMsg.Height && <span className="error" style={{ color: '#d32f2f', padding: '10px' }}>{errorMsg.Height}</span>}
                                </div>
                                <div >
                                    <FormControl variant="standard" sx={{minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-standard-label"
                                            // id="demo-simple-select-standard"
                                            value={formDetails.Position}
                                            onChange={setPositionHandler}
                                            label="Position"
                                            required
                                        >
                                            <MenuItem value="Point Guard(PG)">Point Guard(PG)</MenuItem>
                                            <MenuItem value="Shooting Guard(SG)">Shooting Guard(SG)</MenuItem>
                                            <MenuItem value="Small Forward(SF)">Small Forward(SF)</MenuItem>
                                            <MenuItem value="Power Forward(PF)">Power Forward(PF)</MenuItem>
                                            <MenuItem value="Center(C)">Center(C)</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {errorMsg.Position && <span className="error" style={{ color: '#d32f2f' }}>{errorMsg.Position}</span>}
                                </div>
                                </div>
                                <div>
                                    <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={resetForm} >Reset</Button>
                                    <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={submit}  >Submit</Button>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </form>
            </Container>
        </div >
    )
}
export default Createcomposeteam
