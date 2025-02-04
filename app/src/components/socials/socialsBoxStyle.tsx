import {Box, useColorScheme, useTheme} from "@mui/material";

export function SocialsBoxStyle({ children }) {
    const { mode } = useColorScheme();
    const theme = useTheme();

    return (
        <Box sx={{
            color: mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
            "&:hover": {
                color: '#003892',
            }
        }}>
            {children}
        </Box>
    );
}