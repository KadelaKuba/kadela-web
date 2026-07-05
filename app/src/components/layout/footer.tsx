import { Box, Container, Typography } from "@mui/material";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                py: 4,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'Source Code Pro, monospace', fontSize: '0.8rem' }}
                >
                    © {year} Jakub Kadela
                </Typography>
            </Container>
        </Box>
    );
}
