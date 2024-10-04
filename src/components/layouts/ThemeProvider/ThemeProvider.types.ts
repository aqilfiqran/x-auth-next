// update the Theme type to include the themes you want to support eg: ['light', 'dark', 'snow', 'purple', 'etc']
export const THEMES = ['light', 'dark', 'snow'];

export type ThemeType = (typeof THEMES)[number];
