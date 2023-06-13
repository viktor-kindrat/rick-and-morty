import "./Style/ImgCard.css"

import Box from '@mui/material/Box';

function ImgCard ({data}) {
    return (
        <Box sx={{
            width: "250px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "15px",
            boxShadow: "0 4px 15px #14141450",
            borderRadius: "10px",
            background: "#ffffff",
            cursor: "pointer",
            "transition": "0.3s",
            "&:hover": {
                "background": "#eeeeee"
            }
        }}>
            <img className="Characters__image" width={200} height={150} src={data.image} alt={`${data.name} character`} />
            <div className="Characters__text-content">
                <b className="Characters__text-content_bold">{data.name}</b>
                {data.species}
            </div>
        </Box>
    )
}

export default ImgCard