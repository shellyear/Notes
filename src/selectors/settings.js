import { THEME_MAP } from 'constants/themes';

const branch = state => state.settings;

export const getThemeName = state => branch(state).themeName;
export const getTheme = state => THEME_MAP[getThemeName(state)];