import "./Style/InfoPopup.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { gsap } from "gsap";
import { useEffect } from "react";
import { Box, IconButton, Grid } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

function CharPopup({ data, popupVisible, setPopupVisibility }) {
    useEffect(() => {
        let timeline = gsap.timeline()
        if (popupVisible) {
            timeline.fromTo(".CharPopup", {
                yPercent: -100
            }, {
                yPercent: 0,
                duration: 0.3,
                ease: "power2.inOut"
            })
        } else {
            timeline.fromTo(".CharPopup", {
                yPercent: 0
            }, {
                yPercent: -100,
                duration: 0.3,
                ease: "power2.inOut"
            })
        }
    }, [popupVisible])
    useEffect(() => {
        gsap.set(".CharPopup", { yPercent: -100 })
    })
    return (
        <div className="CharPopup">
            <Grid
                sx={{ height: "100%", width: "100%" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid sx={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} item>
                    <Box sx={{
                        maxHeight: "calc(100vh - 50px)",
                        overflow: "auto",
                        padding: "25px",
                        width: "min(750px, 100%)",
                        height: "auto",
                        background: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 0 15px #14141450",
                    }}>
                        <Grid container
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <IconButton onClick={() => setPopupVisibility(false)} aria-label="close popup">
                                <CloseIcon sx={{ color: "#141414" }} fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Box mt="5px" mb="25px">
                            <h2 className="CharPopup__headline_2">{data.name ? data.name : "Detailed info"}</h2>
                            {
                                data.name ? <p className="CharPopup__subheadline">Detailed info</p> : ""
                            }
                        </Box>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={2}
                        >
                            <Grid item sm="12" lg="6" sx={{ width: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img className="CharPopup__image" width={300} src={data.image} alt="popup avatar" />
                            </Grid>
                            <Grid
                                item
                                sm="12"
                                lg="6"
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                gap="25px"
                            >
                                {
                                    Object.keys(data).filter(item => data[item] !== "").map(item => {
                                        const blockedKeys = ["name", "image", "id", "episode", "url", "created"]
                                        if (blockedKeys.indexOf(item.toLowerCase()) === - 1) {
                                            return (
                                                <div className="CharPopup__property"><span className="CharPopup__property-name">{item}: </span> {
                                                    (typeof (data[item]) === "object") ? Object.keys(data[item]).map(key => {
                                                        if (["url"].indexOf(key.toLowerCase()) === -1) {
                                                            return (
                                                                <div>
                                                                    <span className="CharPopup__property-name_2" style={{ marginLeft: "15px" }}>{key}: </span>{(typeof (data[item][key]) !== "object") ? data[item][key] : ""}
                                                                </div>
                                                            )
                                                        }
                                                        return ""
                                                    }) : (typeof (data[item]) === "string") ? data[item] : ""
                                                }</div>
                                            )
                                        } else if (item.toLowerCase() === "created") {
                                            return (
                                                <div className="CharPopup__property"><span className="CharPopup__property-name">{item}: </span> {`${new Date(data.created).toLocaleString().slice(0, new Date(data.created).toLocaleString().indexOf(","))}`}</div>
                                            )
                                        }
                                        return ""
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default CharPopup