import { Grid, Typography, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function WatchlistItem({ watchlistDispach, data }) {

    return (
        <div style={{ width: "100%" }} className="WatchlistItem">
            <Grid container sx={{ width: "100%", borderBottom: "2px solid #333333", padding: "10px 0" }} direction="row" wrap="wrap" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h4">
                    {data.name}
                </Typography>
                <Grid item>
                    <IconButton onClick={()=> watchlistDispach({ type: "removeSeries", id: data.id })} aria-label="delete" sx={{ color: "#fa1622" }}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => watchlistDispach({ type: "toggleWatched", id: data.id })} aria-label="set done" sx={{ color: (data.isWatched) ? "#d4b508" : "#ffffff" }}>
                        <VisibilityIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default WatchlistItem