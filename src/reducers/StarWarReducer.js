import * as TYPES from '../types/StarWarActionTypes'
import { combineReducers } from 'redux'


const initialState = {
        people : [],
        isFetchingStarWars : false

}

const handleStarWarsFetchSuccess = (state, action) => {
    return({
        ...state,
        people : action.data,
        isfetchingStarWars : false
    })
}

const handleStarWarsFetchInProgress = (state) => {
    return({
        ...state,
        isfetchingStarWars : true
    });
}

const starWars = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WAR_SUCCESS] : handleStarWarsFetchSuccess,
        [TYPES.FETCH_STAR_WARS_REQUEST] : handleStarWarsFetchInProgress
    }

    
    return (handlers[action.type] ? handlers[action.type](state, action) : state);
}

const rootReducer = combineReducers({
    starWars
});

export default rootReducer;