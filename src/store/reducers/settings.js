import { THEME_DEFAULT } from 'constants/themes';
// import { cookie } from 'store';

const THEME_CHANGE = 'theme.change';
const SETTINGS_LOAD = 'settings.load';

export const saveSettingsToCookies = state => {

};

const initialState = {
  themeName: THEME_DEFAULT
};

const ACTION_HANDLERS = {
  [SETTINGS_LOAD]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [THEME_CHANGE]: (state, { payload }) => ({
    ...state,
    themeName: payload.themeName
  })   
};


export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action): state;
} 
