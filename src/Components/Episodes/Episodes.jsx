import "./Style/Episodes.css"
import EpisodesFilter from "./EpisodesFilter/EpisodesFilter"

import { useEffect, useRef, useState, useCallback } from "react"

import Loader from "../UI/Loader/Loader"
import TextCard from "../UI/TextCard/TextCard"
import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"
import { Grid, Pagination, Box } from "@mui/material"

function Episodes() {
    let [pending, setPending] = useState(true);
    let [page, setPage] = useState(1);
    let [filterInfo, setFilterInfo] = useState("")

    let info = useRef({})


    useEffect(() => {
        setPending(true)
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page}${(filterInfo.length > 0) ? `&name=${filterInfo}` : ""}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    info.current.results = []
                    setPending(false)
                } else {
                    info.current = data
                    setPending(false)
                }
            })
            .catch(e => {
                info.current.results = []
                info.current.info.pages = -1
                setPending(false)
            })
    }, [page, filterInfo])

    let paginationHandler = useCallback((e, val) => {
        if (val !== page) {
            setPage(val)
            setPending(true)
        }
    }, [page])
    return (
        <section className="Episodes">
            <HeadlineGroup headline="Episodes" subheadline="All information about each episode are here. Enter your query on filters or view all. Click on card to get full info about the episode" />
            <Grid container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                wrap="wrap">
                {
                    (!pending && info.current) ? <>
                        <Box mt="25px" mb="25px"><EpisodesFilter setPending={setPending} setFilterInfo={setFilterInfo} /></Box>
                        <Grid container direction="row">
                            {info.current.results.map((item, index) => <TextCard key={index} name={item.name} field="Air date" value={item.air_date} />)}
                        </Grid>
                        {(info.current.info.pages === -1) ? "Nothing was found" : <Pagination sx={{ marginTop: "25px" }} onChange={paginationHandler} count={info.current.info.pages} page={page} color="success" />}
                    </> : <Loader />
                }
            </Grid>
        </section>
    )
}

export default Episodes