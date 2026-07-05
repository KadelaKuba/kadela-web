import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";

const NAV_LINKS = [
    { label: 'o mně', href: '#about' },
    { label: 'dovednosti', href: '#skills' },
    { label: 'kontakt', href: '#contact' },
];

export function Header() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            color="transparent"
            sx={{
                backdropFilter: 'saturate(180%) blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container>
                <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
                    <Typography
                        component="a"
                        href="#top"
                        sx={{
                            textDecoration: 'none',
                            color: 'text.primary',
                            fontFamily: 'Source Code Pro, monospace',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                        }}
                    >
                        kadela.cz
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                        {NAV_LINKS.map((link) => (
                            <Button
                                key={link.href}
                                href={link.href}
                                color="inherit"
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    fontFamily: 'Source Code Pro, monospace',
                                    fontSize: '0.85rem',
                                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
