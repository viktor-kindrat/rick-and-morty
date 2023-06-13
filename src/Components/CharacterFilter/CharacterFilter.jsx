import "./Style/CharacterFilter.css"

import { useCallback, useState } from "react"
import { Select, MenuItem, InputLabel, Box, TextField } from "@mui/material"

function CharacterFilter(props) {
    let [gender, setGender] = useState("")
    let [status, setStatus] = useState("")
    let genderHandleChange = useCallback((e, value) => {
        setGender(value.props.value)
    }, [])
    let statusHandleChange = useCallback((e, value) => {
        setStatus(value.props.value)
    }, [])
    return (
        <div className="CharacterFilter">
            <Box sx={{ width: "100%", display: "flex", gap: "25px", alignItems: "flex-end", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        fullWidth
                        sx={{ minWidth: "150px" }}
                        labelId="gender-label"
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={genderHandleChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="genderless">Genderless</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        fullWidth
                        sx={{ minWidth: "150px" }}
                        labelId="status-label"
                        id="status-select"
                        value={status}
                        label="Status"
                        onChange={statusHandleChange}
                    >
                        <MenuItem value="alive">Alive</MenuItem>
                        <MenuItem value="dead">Dead</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </Box>
                <Box sx={{margin: "0", padding: "0"}}>
                    <InputLabel id="species-label">Species</InputLabel>
                    <TextField id="outlined-basic" labelId="species-label" variant="outlined" />
                </Box>
            </Box>
        </div>
    )
}

export default CharacterFilter