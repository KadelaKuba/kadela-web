import { createTheme } from '@mui/material';

export const SYNTAX = {
    bg: '#ffffff',
    bgMuted: '#f6f8fa',
    bgGutter: '#f6f8fa',
    border: '#d0d7de',
    text: '#1f2328',
    textMuted: '#656d76',
    lineNumber: '#8c959f',
    keyword: '#cf222e',
    string: '#1a7f37',
    number: '#0550ae',
    variable: '#953800',
    function: '#8250df',
    comment: '#6e7781',
    accent: '#003892',
} as const;

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        light: {
            palette: {
                primary: { main: SYNTAX.accent },
                secondary: { main: SYNTAX.function },
                background: {
                    default: SYNTAX.bg,
                    paper: SYNTAX.bg,
                },
                text: {
                    primary: SYNTAX.text,
                    secondary: SYNTAX.textMuted,
                },
                divider: SYNTAX.border,
            },
        },
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily: [
            'Source Code Pro',
            'JetBrains Mono',
            'SF Mono',
            'Menlo',
            'Consolas',
            'monospace',
        ].join(','),
        h1: { fontWeight: 700, letterSpacing: '-0.01em' },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        button: {
            textTransform: 'none',
            fontWeight: 500,
            fontFamily: 'Source Code Pro, monospace',
        },
        body1: { fontFamily: 'Source Code Pro, monospace' },
        body2: { fontFamily: 'Source Code Pro, monospace' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    paddingInline: 16,
                    paddingBlock: 6,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: 'none' },
            },
        },
    },
});

export default theme;
