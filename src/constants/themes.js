import { lightTheme, darkTheme } from 'styles';

export const THEME_DARK = 'theme.dark';
export const THEME_LIGHT = 'theme.light';
export const THEME_DEFAULT = THEME_LIGHT;
export const THEME_MAP = {
    [THEME_LIGHT]: lightTheme,
    [THEME_DARK]: darkTheme,
};