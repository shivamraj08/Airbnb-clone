const initialState = {
   listuser:[]
}

//action = {type: "", payload: {}};

const HomeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "Add":
            return [...state, {...payload}];
        default:
            return { ...state }
    }
}

export default HomeReducer;
