import { useEffect } from "react"
import { gsap } from "gsap"

import "./Style/Loader.css"

function Loader() {
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.set(".container", {
            opacity: 0
        })
        .to(".container", {
            opacity: 1,
            duration: 0.3
        })
    }, [])
    return (
        <div className="container">
            <div className="contact-card">
                <div className="avatar"></div>
                <div className="text"></div>
            </div>
            <div className="contact-card">
                <div className="avatar"></div>
                <div className="text"></div>
            </div>
            <div id="magnifying-glass">
                <div id="glass"></div>
                <div id="handle">
                    <div id="handle-inner"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader