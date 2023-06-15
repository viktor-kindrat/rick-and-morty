import "./Style/Locations.css"

import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"
import TextCard from "../UI/TextCard/TextCard"
import Loader from "../UI/Loader/Loader"

import { Grid, Pagination } from "@mui/material"
import { useEffect, useState, useRef, useCallback } from "react"

function Locations() {
    let [page, setPage] = useState(1);
    let [pending, setPending] = useState(true);
    let info = useRef({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    info.current.results = []
                    setPending(false)
                } else {
                    console.log(data)
                    info.current = data
                    setPending(false)
                }
            })
            .catch(e => {
                info.current.results = []
                info.current.info.pages = -1
                setPending(false)
            })
    }, [page])

    let paginationHandler = useCallback((e, val) => {
        if (val !== page) {
            setPage(val)
            setPending(true)
        }
    }, [page])
    return (
        <section className="Locations">
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <HeadlineGroup headline="Locations" subheadline="Locations that mentioned in the cartoon. Filter or view all on this page." />
                <Grid container direction="column" alignItems="center" wrap="wrap">
                    {(!pending && info.current) ?
                        <>
                            <Grid container direction="row" justifyContent="center" wrap="wrap">
                                {info.current.results.map(item => <TextCard name={item.name} field="Type" value={item.type} />)}
                            </Grid>
                            {(info.current.info.pages === -1) ? "Nothing was found" : <Pagination sx={{ marginTop: "25px" }} onChange={paginationHandler} count={info.current.info.pages} page={page} color="success" />}
                        </>
                        : <Loader />}
                </Grid>
            </Grid>
        </section>
    )
}

export default Locations