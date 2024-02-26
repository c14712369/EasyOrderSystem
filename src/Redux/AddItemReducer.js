const initialState = {
    分類: '',
    排序: '',
    是否啟用: false,
    file: null,
};

const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return { ...state, 分類: action.payload };
        case 'UPDATE_SORT':
            return { ...state, 排序: action.payload };
        case 'TOGGLE_ENABLE':
            return { ...state, 是否啟用: !state.是否啟用 };
        case 'UPDATE_FILE':
            return { ...state, file: action.payload };
        default:
            return state;
    }
};

export default addItemReducer;
