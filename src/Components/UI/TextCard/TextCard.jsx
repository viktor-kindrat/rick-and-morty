import { Grid } from "@mui/material"

function TextCard ({name, field, value}) {
    return (
        <div className="TextCard" style={{ width: "250px", border: "1px solid #141414"}}>
            <Grid
                p="15px" 
                container
                direction="column"
                gap="5px"
                sx={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                        background: "#eeeeee"
                    }
                }}
                >
                <Grid item>
                    <h3 className="TextCard__headline">{name ? name : "*without name*"}</h3>
                </Grid>
                <Grid item>
                    <span className="TextCard__info">{field}: {value}</span>
                </Grid>
            </Grid> 
        </div>
    )
}

export default TextCard