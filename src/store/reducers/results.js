import * as actonTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: [],
};

const deleteResult = ( state, action ) => {
   const updatedArray = state.results.filter( item => item.id !== action.resultId);
   return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actonTypes.STORE_RESULT: return updateObject( state, { results: state.results.concat({id: new Date(), value: action.result})});
        case actonTypes.DELETE_RESULT: return deleteResult( state, action );
    }
    return state;
};

export default reducer;