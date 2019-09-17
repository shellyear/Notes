import * as actionTypes from '../../constants/actionTypes';

export const initialState = {
    notes: [
        { id: 1, content: 'SASAI'},
        { id: 2, content: 'ZHASAsdfjsdlkfjds'},
        { id: 3, content: 'ZHASAsdfjsdlkfjds'}
    ]
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        
        case actionTypes.UPDATE_NOTE: 
            const { id, content } = action.payload;
            return {
                ...state,
                notes: state.notes.map(note => {
                    return note.id == id ? {...note, content }: note 
                })
            };
        
        case actionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };
    
        default:
            return state;
    };
};


export default rootReducer;