import "./Style/Header.css"
import charactersIcon from "./Images/characters.svg"
import episodesIcon from "./Images/episodes.svg"
import homeIcon from "./Images/home.svg"
import locationsIcon from "./Images/locations.svg"
import watchListIcon from "./Images/watchList.svg"

import { useState } from "react"
import { BottomNavigation, Link, BottomNavigationAction } from "@mui/material"

function Header() {
    let [tab, setTab] = useState("Home")
    return (
        <header className="Header">
            <span className="Header__logo">Rick&Morty</span>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                  setTab(newValue);
                }}
            >
                <Link sx={{background: "#eeeeee"}} href="/">
                    <BottomNavigationAction label="Home" icon={<img src={homeIcon} alt="menu item"/>} />
                </Link>
                <Link sx={{background: "#eeeeee"}} href="/character">
                    <BottomNavigationAction label="Characters" icon={<img src={charactersIcon} alt="menu item"/>} />
                </Link>
                <Link sx={{background: "#eeeeee"}} href="/episode">
                    <BottomNavigationAction label="Episodes" icon={<img src={episodesIcon} alt="menu item"/>} />
                </Link>
                <Link sx={{background: "#eeeeee"}} href="/location">
                    <BottomNavigationAction label="Locations" icon={<img src={locationsIcon} alt="menu item"/>} />
                </Link>
                <Link sx={{background: "#eeeeee"}} href="/wathclist">
                    <BottomNavigationAction label="My watchlist" icon={<img src={watchListIcon} alt="menu item"/>} />
                </Link>
            </BottomNavigation>
        </header>
    )
}

export default Header