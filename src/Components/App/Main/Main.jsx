import "./Style/Main.css"
import Characters from "../../Characters/Characters";
import Episodes from "../../Episodes/Episodes";
import Locations from "../../Locations/Locations";
import Watchlist from "../../Watchlist/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="character" element={<Characters/>}></Route>
                    <Route path="episode" element={<Episodes/>}></Route>
                    <Route path="location" element={<Locations/>}></Route>
                    <Route path="watchlist" element={<Watchlist/>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Main