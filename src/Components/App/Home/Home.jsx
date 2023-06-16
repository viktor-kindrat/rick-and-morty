import bg from "./images/bg.png"

import { Grid, Typography } from "@mui/material"

function Home(){
    return (
        <section className="Home">
            <Grid sx={{minHeight: "calc(100vh - 150px)"}} container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                <Grid item>
                    <Grid container justifyContent="center" alignItems="center">
                        <img style={{width: "min(350px, 100%)", objectFit: "cover", height: "auto"}} width={350} src={bg} alt="Rick and Morty" />
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <h1 className="Home__headline">Rick&Morty fan page</h1>
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )
}

export default Home