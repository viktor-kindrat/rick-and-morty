import "./Style/Characters.css"
import Loader from "../Loader/Loader";
import ImgCard from "../ImgCard/ImgCard";
import CharacterFilter from "../CharacterFilter/CharacterFilter";

import { useRef, useEffect, useState } from "react"
import { Pagination } from "@mui/material";


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
                    <CharacterFilter/>
                    <div className="Characters__container">
                        {
                            info.current.results.map((item, index) =>
                                <ImgCard key={index} data={item} />
                            )
                        }
                    </div>
                    {console.log(info.current)}
                    <Pagination onChange={(e, page) => {
                        setPage(page)
                        setPending(true)
                    }} count={info.current.info.pages} page={page} color="success" />
                </> : <Loader />
            }
        </section>
    )
}

export default Characters