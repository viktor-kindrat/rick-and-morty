import "./Style/Characters.css"
import Loader from "../Loader/Loader";

import { useRef, useEffect, useState } from "react"
import { Pagination } from "@mui/material";
import Box from '@mui/material/Box';

function Characters() {
    let [pending, setPending] = useState(true);
    let [page, setPage] = useState(1)
    let info = useRef({})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/?page=" + page)
            .then(res => res.json())
            .then(data => {
                info.current = data;
                setPending(false)
                console.log(data)
            })
    }, [page])
    return (
        <section className="Characters">
            <div className="Characters__headline-group">
                <h2 className="Characters__headline">Characters</h2>
                <span className="Characters__subheadline">On this page you can find information about all characters. Enter your query on filters or view all. Click on card to get full info about the character</span>
            </div>
            {
                (info.current && !pending) ? <>
                    <div className="Characters__container">
                        {
                            info.current.results.map(item=>
                                <Box sx={{
                                    width: "250px",
                                    padding: "25px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    gap: "15px",
                                    boxShadow: "0 4px 15px #14141450",
                                    borderRadius: "10px",
                                    background: "#ffffff",
                                    cursor: "pointer",
                                    "transition": "0.3s",
                                    "&:hover": {
                                        "background": "#eeeeee"
                                    }
                                }}>
                                    <img className="Characters__image" width={200} height={150} src={item.image} alt={`${item.name} character`} />
                                    <div className="Characters__text-content">
                                        <b className="Characters__text-content_bold">{item.name}</b>
                                        {item.species}
                                    </div>
                                </Box>
                            )
                        }
                    </div>
                    {console.log(info.current)}
                    <Pagination onChange={(e, page)=>{
                        setPage(page)
                        setPending(true)
                    }} count={info.current.info.pages} page={page} color="success" />
                </> : <Loader/>
            }
        </section>
    )
}

export default Characters