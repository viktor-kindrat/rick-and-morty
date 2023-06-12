import "./Style/Header.css"
import charactersIcon from "./Images/characters.svg"
import episodesIcon from "./Images/episodes.svg"
import homeIcon from "./Images/home.svg"
import locationsIcon from "./Images/locations.svg"
import watchListIcon from "./Images/watchList.svg"

import { useState } from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"


function Header() {
    let [tab, setTab] = useState(localStorage.getItem("page") || 0);
    return (
        <header className="Header">
            <span className="Header__logo"><span className="Header__logo_green">Rick</span>&<span className="Header__logo_pink">Morty</span></span>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                    localStorage.setItem("page", newValue)
                }}
            >
                <BottomNavigationAction href={"/"} sx={{ background: "#eeeeee" }} label="Home" icon={<img src={homeIcon} alt="menu item" />} />
                <BottomNavigationAction href={"/character"} sx={{ background: "#eeeeee" }} label="Characters" icon={<img src={charactersIcon} alt="menu item" />} />
                <BottomNavigationAction href={"/episode"} sx={{ background: "#eeeeee" }} label="Episodes" icon={<img src={episodesIcon} alt="menu item" />} />
                <BottomNavigationAction href={"/location"} sx={{ background: "#eeeeee" }} label="Locations" icon={<img src={locationsIcon} alt="menu item" />} />
                <BottomNavigationAction href={"/watchlist"} sx={{ background: "#eeeeee" }} label="Watchlist" icon={<img src={watchListIcon} alt="menu item" />} />
            </BottomNavigation>
        </header>
    )
}

export default Header