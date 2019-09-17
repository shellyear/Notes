import * as actionTypes from '../../constants/actionTypes';


export const addNote = (content) => {
    return {
        type: actionTypes.ADD_NOTE,
        payload: {
            id: new Date().getTime(),
            content
        }
    };
};

export const deleteNote = (id) => {
    return {
        type: actionTypes.DELETE_NOTE,
        payload: id 
    };
};

export const updateNote = (id, content) => {
    return {
        type: actionTypes.UPDATE_NOTE,
        payload: {
            id,
            content
        }
    };
};