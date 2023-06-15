import "./Style/CharacterFilter.css"

import { useCallback } from "react"
import { Select, MenuItem, InputLabel, Box, TextField, Button } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function CharacterFilter({ searchStatus, toggleSearch, gender, setGender, status, setStatus, species, setSpecies }) {
    let genderHandleChange = useCallback((e, value) => {
        setGender(value.props.value)
    }, [setGender])
    let statusHandleChange = useCallback((e, value) => {
        setStatus(value.props.value)
    }, [setStatus])
    let speciesHandleChange = useCallback((e) => {
        setSpecies(e.target.value)
    }, [setSpecies])
    return (
        <div className="CharacterFilter">
            <Box sx={{ width: "100%", display: "flex", gap: "25px", alignItems: "flex-end", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <InputLabel sx={{color: "#ffffff"}} id="gender-label">Gender</InputLabel>
                    <Select
                        color="success"
                        fullWidth
                        sx={{ minWidth: "150px" }}
                        labelId="gender-label"
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={genderHandleChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="genderless">Genderless</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <InputLabel sx={{color: "#ffffff"}} id="status-label">Status</InputLabel>
                    <Select
                        color="success"
                        fullWidth
                        sx={{ minWidth: "150px" }}
                        labelId="status-label"
                        id="status-select"
                        value={status}
                        label="Status"
                        onChange={statusHandleChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="alive">Alive</MenuItem>
                        <MenuItem value="dead">Dead</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ margin: "0", padding: "0" }}>
                    <InputLabel sx={{color: "#ffffff"}} id="species-label">Species</InputLabel>
                    <TextField color="success" id="outlined-basic" labelId="species-label" variant="outlined" onChange={speciesHandleChange} />
                </Box>
                <Button onClick={() => toggleSearch(!searchStatus)} defValue={species} sx={{ height: "55px" }} size={"large"} variant="contained" color="success" endIcon={<FilterAltIcon />}>
                    Apply filters
                </Button>
            </Box>
        </div>
    )
}

export default CharacterFilter