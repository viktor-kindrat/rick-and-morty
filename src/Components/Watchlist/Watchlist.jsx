import "./Style/Watchlist.css"

import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"

import { Grid, TextField, Autocomplete } from "@mui/material"

import { /*useReducer,*/ useState, useEffect, useRef, useCallback } from "react"
// import reducer from "./Reducers/watchlistReducer"

function Watchlist() {
    // let [watchlist, watchlistDispach] = useReducer(reducer, JSON.parse(localStorage.getItem("watchlist")) || []);
    let [inputValue, setInputValue] = useState("");

    let info = useRef([]);
    let count = useRef(-1)
    let [labels, setLabels] = useState(false);

    let labelsSeter = useCallback(() => {
        let ids = info.current.map(item => item.id)
        setLabels(info.current.filter((item, index) => index === ids.lastIndexOf(item.id)).map(item => {
            return { label: item.name }
        }))
        console.log(labels, count.current)
        // eslint-disable-next-line
    }, [labels, info.current])

    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/episode").then(res => res.json())
            .then(data => {
                info.current = [...info.current, ...data.results]
                count.current = data.info.count
                return data.info.pages
            })
            .then(pages => {
                for (let i = 2; i <= pages; i++) {
                    fetch(`https://rickandmortyapi.com/api/episode?page=${i}`).then(res => res.json())
                        .then(data => {
                            info.current = [...info.current, ...data.results]
                        })
                        .then(()=>{
                            labelsSeter()
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }, [labelsSeter])

    return (
        <section className="Watchlist">
            <Grid container alignItems="center" justifyContent="center" direction="column" spacing={2}>
                <HeadlineGroup headline="My watch list" subheadline="Here is todo planer for storeing Rick&Morty series to watch later" />
                <Grid item>
                    <Grid conatiner spacing={3}>
                        <Grid item mb="25px">
                            <Grid container direction="row" wrap="wrap" alignItems="center" justifyContent="center" gap="25px">
                                {
                                    (labels && labels.length === count.current) ? <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={labels}
                                        sx={{ width: 300 }}
                                        value={inputValue}
                                        onChange={(e, newVal) => setInputValue(newVal)}
                                        renderInput={(params) => <TextField {...params} color="success" label="Series name" variant="outlined" />}
                                    /> : "Loading series. Wait"
                                }
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" alignItems="center" justifyContent="center" gap="25px">
                                {/* {
                                    (watchlist.length > 0) ? "Here is something but this page in dev" : "Anything yet. Write series to watch later in the input above"
                                } */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Watchlist