const reducer = (state, action) =>{
    switch (action.type) {
        case "addSeries": {
            let matcher = [...state].filter(item=>(item.name === action.name));
            if (matcher.length === 0) {
                let calculated = [...state, {
                    id: action.id,
                    name: action.name,
                    isWatched: action.watched
                }]
                localStorage.setItem("watchlist", JSON.stringify(calculated))
                return calculated
            } else {
                return state
            }
        }
        case "removeSeries": {
            let calculated = [...state].filter(item=>item.id!==action.id)
            localStorage.setItem("watchlist", JSON.stringify(calculated))
            return calculated
        }
        case "toggleWatched": {
            let calculated = [...state].map(item=>(item.id === action.id ? {...item, isWatched: !item.isWatched} : item))
            localStorage.setItem("watchlist", JSON.stringify(calculated))
            return calculated
        }
        default: {
            return state
        }
    }
}

export default reducer