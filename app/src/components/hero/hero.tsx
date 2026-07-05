import { Box, Button, Stack, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { FaArrowDown } from "react-icons/fa";
import { Section } from "@kadela/components/layout/section";
import { SYNTAX } from "@kadela/theme";

export function Hero() {
    return (
        <Section id="top">
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                            lineHeight: 1.15,
                            mb: 3,
                            fontWeight: 700,
                        }}
                    >
                        Ahoj, jsem Jakub Kadela
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'text.secondary',
                            fontFamily: 'Source Code Pro, monospace',
                            fontSize: { xs: '1.05rem', md: '1.2rem' },
                            mb: 4,
                            minHeight: '1.8em',
                            '& .Typewriter': { display: 'inline-block' },
                        }}
                    >
                        <Box component="span" sx={{ color: SYNTAX.comment }}>{'>'}</Box>
                        <Typewriter
                            options={{
                                strings: [
                                    'Backend Developer',
                                    'PHP advocate',
                                    'Clean code & testing',
                                    'diving into world of JavaScript',
                                    'Car enthusiast',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                                delay: 70,
                            }}
                        />
                    </Box>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            href="#contact"
                            variant="contained"
                            disableElevation
                            sx={{
                                bgcolor: SYNTAX.accent,
                                '&:hover': { bgcolor: '#002a6e' },
                            }}
                        >
                            Spojme se
                        </Button>
                        <Button
                            href="#about"
                            variant="outlined"
                            endIcon={<FaArrowDown />}
                            sx={{ borderColor: 'divider', color: 'text.primary' }}
                        >
                            Více o mně
                        </Button>
                    </Stack>
                </Box>

                <Box
                    component="img"
                    src="/assets/avatar.jpg"
                    alt="Jakub Kadela"
                    loading="eager"
                    sx={{
                        flexShrink: 0,
                        width: { xs: 200, sm: 240, md: 280 },
                        aspectRatio: '3 / 4',
                        borderRadius: 2,
                        objectFit: 'cover',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                />
            </Stack>
        </Section>
    );
}
