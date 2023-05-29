import React from "react";
// import { FormControl, InputLabel} from '@mui/material';
import Navbar from "./navBar";
import { Button, Divider, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Firstquarter = ({ formDetails }) => {
    console.log("props===============", formDetails);
    const { FirstName, LastName, Position, Height } = formDetails

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
                    <Button sx={{ m: 2 }} variant="contained" size="medium" >Back</Button>
                </div>
        </>
    )
}

export default Firstquarter;