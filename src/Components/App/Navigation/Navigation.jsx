import "./Style/Navigation.css"
import PersonIcon from '@mui/icons-material/Person';
import TvIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import StarRateIcon from '@mui/icons-material/StarRate';

import { useState } from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"


function Navigation() {
    let [tab, setTab] = useState(localStorage.getItem("page") || 0);
    return (
        <nav className="Navigation">
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                    localStorage.setItem("page", newValue)
                }}
            >
                <BottomNavigationAction href={"/"} sx={{ background: "#101010", "color": "#ffffff" }} label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction href={"character"} sx={{ background: "#101010", "color": "#ffffff" }} label="Characters" icon={<PersonIcon />} />
                <BottomNavigationAction href={"episode"} sx={{ background: "#101010", "color": "#ffffff" }} label="Episodes" icon={<TvIcon />} />
                <BottomNavigationAction href={"location"} sx={{ background: "#101010", "color": "#ffffff" }} label="Locations" icon={<RoomIcon />} />
                <BottomNavigationAction href={"watchlist"} sx={{ background: "#101010", "color": "#ffffff" }} label="Watchlist" icon={<StarRateIcon />} />
            </BottomNavigation>
        </nav>
    )
}

export default Navigation