import { Grid, TextField, Autocomplete, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function WatchlistSearch({labels, count, setInputValue, inputValue, handleAdd}) {
    return (
        <Grid container direction="row" wrap="wrap" alignItems="stretch" justifyContent="center" gap="25px">
            {
                (labels && labels.length === count.current) ? <Autocomplete disablePortal id="combo-box-demo" options={labels} sx={{ width: 300 }} value={inputValue} onChange={(e, newVal) => setInputValue(newVal)}
                    renderInput={(params) => <TextField {...params} color="success" label="Type the name of series" variant="outlined" />}
                /> : "Loading series list. Wait..."
            }
            <Button {... (inputValue === null) ? { disabled: true } : {}} onClick={handleAdd} variant="contained" color="success" size="large" endIcon={<AddIcon />}>Add to watchlist</Button>
        </Grid>
    )
}

export default WatchlistSearch