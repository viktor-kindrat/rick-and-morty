import { useState, useCallback } from "react"
import { TextField, Grid, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function LocationsFilter({ setPending, setFilterData }) {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [dimension, setDimension] = useState("");

    let applyFilter = useCallback((e) => {
        setPending(true);
        setFilterData({ name: name, type: type, dimension: dimension })
    })
    return (
        <div className="LocationsFilter">
            <Grid container direction="row" wrap="wrap" alignItems="center" justifyContent="center" spacing={2}>
                <Grid item><TextField onChange={(e) => setName(e.target.value)} value={name} type="outlined" color="success" label="Name" /></Grid>
                <Grid item><TextField onChange={(e) => setType(e.target.value)} value={type} type="outlined" color="success" label="Type" /></Grid>
                <Grid item><TextField onChange={(e) => setDimension(e.target.value)} value={dimension} type="outlined" color="success" label="Dimension" /></Grid>
                <Grid item><Button onClick={applyFilter} sx={{ height: "55px" }} size={"large"} variant="contained" color="success" endIcon={<SearchIcon />}>Search</Button></Grid>
            </Grid>
        </div>
    )
}

export default LocationsFilter