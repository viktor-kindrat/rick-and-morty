import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"
import WatchlistSearch from "./WatchlistSearch/WatchlistSearch"
import WatchlistItem from "./WatchlistItem/WatchlistItem"

import { Grid } from "@mui/material"

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
            <Grid container alignItems="center" justifyContent="center" direction="column" >
                <HeadlineGroup headline="My watch list" subheadline="Here is todo planer for storeing Rick&Morty series to watch later" />
                <Grid item>
                    <Grid container direction="column">
                        <Grid item mb="25px">
                            <WatchlistSearch {...{labels, count, setInputValue, inputValue, handleAdd}}/>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" alignItems="center" justifyContent="center" gap="25px">
                                {(watchlist.length > 0) ? watchlist.map(item=><WatchlistItem key={item.id} watchlistDispach={watchlistDispach} data={item}/>) : "There isn't anything here yet. Write down in the input above the series to watch later."}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Watchlist