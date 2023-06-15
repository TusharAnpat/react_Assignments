import React from "react";
import Navbar from "./navBar";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";

const Firstquarter = ({ formDetails }) => {
    console.log("props===============", formDetails);
    const { FirstName, LastName, Position } = formDetails

    //Here we redirect to HomePage.
    const navigate = useNavigate()
    const onHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <Navbar />
            <div style={{
                display: 'inline-flex',
                textAlign: "center",
                margin: '20px',
                padding: '10px',
                width: 400,
                height: '400px',
                border: '1px solid #C7BEBC'
            }}>
                <div>
                    <FormControl variant="standard" sx={{ maxWidth: "md", paddingRight: '10px', minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Name</InputLabel>
                        <Select
                            // value={formDetails.Position}
                            // onChange={setPositionHandler}
                            label="Name"
                            defaultValue={FirstName + LastName}
                            required
                        >
                            <MenuItem value={FirstName + LastName}>{FirstName + LastName}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ paddingRight: '10px', minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                        <Select
                            // value={formDetails.Position}
                            // onChange={setPositionHandler}
                            label="Position"
                            defaultValue={Position}
                            required
                        >
                            <MenuItem value={Position}>{Position}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <Button sx={{ m: 2 }} variant="contained" size="medium" onClick={onHomePage}>Back</Button>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Firstquarter;