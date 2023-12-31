import "@fontsource/roboto/900.css"
import "@fontsource/roboto/400.css"
import { Grid } from "@mui/material"

function TextCard ({name, field, value}) {
    return (
        <div className="TextCard" style={{ width: "250px", border: "1px solid #ffffff"}}>
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
                        background: "#333333"
                    }
                }}
                >
                <Grid item>
                    <h3 style={{fontSize: "16px", fontFamily: "Roboto, sans-serif", fontWeight: "900", color: "#ffffff"}} className="TextCard__headline">{name ? name : "*without name*"}</h3>
                </Grid>
                <Grid item>
                    <span style={{fontSize: "14px", fontFamily: "Roboto, sans-serif", fontWeight: "400", color: ""}} className="TextCard__info">{field}: {value}</span>
                </Grid>
            </Grid> 
        </div>
    )
}

export default TextCard