import "./Style/Watchlist.css"

import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"

import { Grid, TextField, Autocomplete, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

import { useReducer, useState, useEffect, useRef } from "react"
import reducer from "./Reducers/watchlistReducer"

function Watchlist() {
    let [watchlist, watchlistDispach] = useReducer(reducer, JSON.parse(localStorage.getItem("watchlist")) || []);
    let [inputValue, setInputValue] = useState(null);

    let info = useRef([]);
    let count = useRef(-1)
    let [labels, setLabels] = useState([])

    useEffect(() => {
        let labelsSeter = () => {
            let ids = info.current.map(item => item.id)
            setLabels(info.current.filter((item, index) => index === ids.lastIndexOf(item.id)).map(item => {
                return { label: item.name }
            }))
        }
        fetch("https://rickandmortyapi.com/api/episode").then(res => res.json())
            .then(data => {
                info.current = [...info.current, ...data.results]
                count.current = data.info.count
                return data.info.pages
            })
            .then(pages => {
                for (let i = 2; i <= pages; i++) {
                    fetch(`https://rickandmortyapi.com/api/episode?page=${i}`).then(res => res.json())
                        .then(data => info.current = [...info.current, ...data.results])
                        .then(() => labelsSeter())
                        .catch((e) => console.log(e))
                }
            }).catch((e) => console.log(e))
    }, [])

    let handleAdd = (e) => {
        watchlistDispach({
            id: `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`,
            type: "addSeries",
            isWatched: false,
            name: inputValue.label
        })
        setInputValue(null)
    }

    return (
        <section className="Watchlist">
            <Grid container alignItems="center" justifyContent="center" direction="column" spacing={2}>
                <HeadlineGroup headline="My watch list" subheadline="Here is todo planer for storeing Rick&Morty series to watch later" />
                <Grid item>
                    <Grid container direction="column" spacing={3}>
                        <Grid item mb="25px">
                            <Grid container direction="row" wrap="wrap" alignItems="stretch" justifyContent="center" gap="25px">
                                {
                                    (labels && labels.length === count.current) ? <Autocomplete disablePortal id="combo-box-demo" options={labels} sx={{ width: 300 }} value={inputValue} onChange={(e, newVal) => setInputValue(newVal)}
                                        renderInput={(params) => <TextField {...params} color="success" label="Series name" variant="outlined" />}
                                    /> : "Loading series. Wait..."
                                }
                                <Button {... (inputValue === null) ? {disabled: true} : {}} onClick={handleAdd} variant="contained" color="success" size="large" endIcon={<AddIcon />}>Add to watchlist</Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" alignItems="center" justifyContent="center" gap="25px">
                                {
                                    (watchlist.length > 0) ? watchlist.map(item=>item.name) : "Anything yet. Write series to watch later in the input above"
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Watchlist