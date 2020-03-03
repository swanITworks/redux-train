import * as actonTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actonTypes.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });

        case actonTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });

        case actonTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val });

        case actonTypes.SUB:
            return updateObject(state, { counter: state.counter - action.val });
    }

    return state;
};

export default reducer;