import "./Style/Main.css"
import Characters from "../../Characters/Characters";
import Episodes from "../../Episodes/Episodes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="character" element={<Characters/>}></Route>
                    <Route path="episode" element={<Episodes/>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Main