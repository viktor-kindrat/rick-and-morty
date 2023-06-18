const reducer = (state, action) =>{
    switch (action.type) {
        case "addSeries": {
            let matcher = [...state].filter(item=>(item.name === action.name));
            if (matcher.length === 0) {
                return [...state, {
                    id: action.id,
                    name: action.name,
                    isWatched: action.watched
                }]
            } else {
                return state
            }
        }
        case "removeSeries": {
            return [[...state].filter(item=>item.id!==action.id)]
        }
        default: {
            return state
        }
    }
}

export default reducer