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
    let [searchToggler, toggleSearch] = useState(false)

    let [gender, setGender] = useState("");
    let [status, setStatus] = useState("");
    let [species, setSpecies] = useState("");

    useEffect(() => {
        setPending(true)
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}${gender.length > 0 ? `&gender=${gender}` : ""}${status.length > 0 ? `&status=${status}` : ""}${species.length > 0 ? `&species=${species}` : ""}`)
            .then(res => res.json())
            .then(data => {
                info.current = data;
                setPending(false)
                console.log(data)
            })
        // eslint-disable-next-line
    }, [page, searchToggler])

    return (
        <section className="Characters">
            <div className="Characters__headline-group">
                <h2 className="Characters__headline">Characters</h2>
                <span className="Characters__subheadline">On this page you can find information about all characters. Enter your query on filters or view all. Click on card to get full info about the character</span>
            </div>
            {
                (info.current && !pending) ? <>
                    <CharacterFilter searchStatus={searchToggler} toggleSearch={toggleSearch} setPending={setPending} gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} />
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