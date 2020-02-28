import * as actonTypes from './actions';

const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actonTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case actonTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actonTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }

        case actonTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }

        case actonTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }

        case actonTypes.DELETE_RESULT:
            const newArray = state.results.filter( item => item.id !== action.resultId);
            return {
                ...state,
                results: newArray,

            }
    }

    return state;
};

export default reducer;