import "./Style/Main.css"
import Characters from "../Characters/Characters";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main className="Main">
            <h1>Page is</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="character" element={<Characters/>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Main