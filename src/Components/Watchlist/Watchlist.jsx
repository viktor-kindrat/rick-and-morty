import "./Style/Watchlist.css"

import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"

import { Grid } from "@mui/material"

function Watchlist(){
    return (
        <section className="Watchlist">
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <HeadlineGroup headline="My watch list" subheadline="Here is todo planer for storeing Rick&Morty series to watch later"/>
            </Grid>
        </section>
    )
}

export default Watchlist