import "./Style/Locations.css"

import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"
import TextCard from "../UI/TextCard/TextCard"
import Loader from "../UI/Loader/Loader"
import LocationsFilter from "./LocationsFilter/LocationsFilter"

import { Grid, Pagination } from "@mui/material"
import { useEffect, useState, useRef, useCallback } from "react"

function Locations() {
    let [page, setPage] = useState(1);
    let [pending, setPending] = useState(true);
    let info = useRef({});
    let [filterData, setFilterData] = useState({ name: "", type: "", dimension: "" })

    useEffect(() => {
        let x;
        fetch(`https://rickandmortyapi.com/api/location/?page=${page}${(filterData.name.length > 0) ? `&name=${filterData.name}` : ""}${(filterData.type.length > 0) ? `&type=${filterData.type}` : ""}${(filterData.dimension.length > 0) ? `&dimension=${filterData.dimension}` : ""}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    info.current.results = []
                    x=setTimeout(() => {
                        setPending(false)
                    }, 1000);
                } else {
                    console.log(data)
                    info.current = data
                    x=setTimeout(() => {
                        setPending(false)
                    }, 1000);
                }
            })
            .catch(e => {
                info.current.results = []
                info.current.info.pages = -1
                x=setTimeout(() => {
                    setPending(false)
                }, 1000);
            })
            return ()=>{
                clearTimeout(x)
            }
    }, [page, filterData])

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
                            <Grid pt="25px" pb="25px" container direction="row" justifyContent="center" wrap="wrap"><LocationsFilter setPending={setPending} setFilterData={setFilterData} /></Grid>
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