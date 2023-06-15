import "./Style/Characters.css"
import Loader from "../UI/Loader/Loader";
import ImgCard from "../UI/ImgCard/ImgCard";
import CharacterFilter from "./CharacterFilter/CharacterFilter";
import InfoPopup from "../UI/InfoPopup/InfoPopup";
import HeadlineGroup from "../UI/HeadlineGroup/HeadlineGroup"

import { useRef, useEffect, useState, useCallback } from "react"
import { Pagination } from "@mui/material";


function Characters() {
    let [pending, setPending] = useState(true);
    let [page, setPage] = useState(1)
    let info = useRef({})
    let [searchToggler, toggleSearch] = useState(false);

    let [popupVisible, setPopupVisibility] = useState(false);
    let popupInfo = useRef({})
    let cardClickHandle = (info) => {
        popupInfo.current = info;
        setPopupVisibility(true)
    }

    let [gender, setGender] = useState("");
    let [status, setStatus] = useState("");
    let [species, setSpecies] = useState("");

    let paginationChange = useCallback((e, val) => {
        if (val !== page) {
            setPage(val)
            setPending(true)
        }
    }, [page])

    useEffect(() => {
        setPending(true)
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}${gender.length > 0 ? `&gender=${gender}` : ""}${status.length > 0 ? `&status=${status}` : ""}${species.length > 0 ? `&species=${species}` : ""}`)
            .then(res => res.json())
            .then(data => {
                info.current = data;
                setPending(false)
            })
            .catch(e => console.error(e))
        // eslint-disable-next-line
    }, [page, searchToggler])

    return (
        <section className="Characters">
            <InfoPopup data={popupInfo.current} popupVisible={popupVisible} setPopupVisibility={setPopupVisibility} />
            <HeadlineGroup headline="Characters" subheadline="On this page you can find information about all characters. Enter your query on filters or view all. Click on card to get full info about the character" />
            {
                (info.current && !pending) ? <>
                    <CharacterFilter searchStatus={searchToggler} toggleSearch={toggleSearch} setPending={setPending} gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} />
                    <div className="Characters__container">
                        {
                            info.current.results.map((item, index) => <ImgCard clickHandle={cardClickHandle} key={index} data={item} />)
                        }
                    </div>
                    {console.log(info.current)}
                    <Pagination onChange={paginationChange} count={info.current.info.pages} page={page} color="success" />
                </> : <Loader />
            }
        </section>
    )
}

export default Characters