import Box from '@mui/material/Box';

function ImgCard ({data, clickHandle}) {
    return (
        <Box sx={{
            width: "250px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "15px",
            boxShadow: "0 4px 15px #00000050",
            color: "#ffffff",
            borderRadius: "10px",
            background: "#141414",
            cursor: "pointer",
            "transition": "0.3s",
            "&:hover": {
                "background": "#333333"
            }
        }}
        onClick={(e)=>{
            clickHandle(data)
        }}
        >
            <img className="Characters__image" width={200} height={150} src={data.image} alt={`${data.name} character`} />
            <div className="Characters__text-content">
                <b className="Characters__text-content_bold">{data.name}</b>
                {data.species}
            </div>
        </Box>
    )
}

export default ImgCard