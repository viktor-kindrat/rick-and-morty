import bg from "./Images/background.webp"

import { Grid, Typography } from "@mui/material"

function Home(){
    return (
        <section className="Home" style={{ marginBottom:"75px", height: "100vh", background: `linear-gradient(#00000050, #00000050), url("${bg}") center no-repeat`, backgroundSize: "cover, cover"}}>
            <Grid p={"25px"} sx={{minHeight: "calc(100vh - 150px)"}} container justifyContent="center" alignItems="flex-start" direction="column" spacing={2}>
                <Grid>
                    <Typography variant="h1" fontWeight={900}>
                        Rick and Morty fan page
                    </Typography>
                    <Typography variant="subtitle1">
                        Explore the world of Rick and Morty series
                    </Typography>

                </Grid>
            </Grid>
        </section>
    )
}

export default Home