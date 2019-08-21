export const addResultValue = (state = [],action) =>{
    switch(action.type){
        case 'product':
            return[
                ...state,
                {
                    value:action.value
                }
            ]
        case 'division':
            return[
                ...state,
                {
                    value:action.value
                }
            ]
        default:
                return state
                }
    }


