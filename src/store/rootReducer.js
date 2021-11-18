

export default function combineReducers (state = null, action) {
    switch (action.type) {
        case 'MY_ACTION_TYPE':
          return action.payload
    }
    return state;
}
