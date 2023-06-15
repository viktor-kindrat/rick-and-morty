import { useState } from "react"

import { TextField, Button, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function EpisodesFilter({ setFilterInfo, setPending }) {
    let [field, setField] = useState("")
    let handleChange = (e) => setField(e.target.value)
    let applyFilter = (e)=>{
        setFilterInfo(field);
        setPending(true)
        setField("")
    }
    return (
        <div className="EpisodesFilter">
            <Grid container direction="row" alignItems="center" justifyContent="center" gap="25px" wrap="wrap">
                <TextField value={field} onChange={handleChange} color="success" id="outlined-basic" label="Enter the name" variant="outlined" />
                <Button onClick={applyFilter} sx={{ height: "55px" }} size={"large"} variant="contained" color="success" endIcon={<SearchIcon />}>Search</Button>
            </Grid>
        </div>
    )
}

export default EpisodesFilter