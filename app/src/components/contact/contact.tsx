import { Box, Button, Stack, Typography } from "@mui/material";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Section } from "@kadela/components/layout/section";
import { SYNTAX } from "@kadela/theme";

const CONTACT_EMAIL = 'kadelakuba@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jakub-kadela/';
const GITHUB_URL = 'https://github.com/KadelaKuba';

export function Contact() {
    return (
        <Section id="contact" muted>
            <Stack spacing={3} sx={{ maxWidth: 720 }}>
                <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700 }}
                >
                    Kontakt
                </Typography>

                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8 }}>
                    Máš nápad nebo projekt? Napiš mi – nejrychleji e-mailem.
                </Typography>

                <Box>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                        <Button
                            href={`mailto:${CONTACT_EMAIL}`}
                            variant="contained"
                            disableElevation
                            startIcon={<FaEnvelope />}
                            sx={{
                                bgcolor: SYNTAX.accent,
                                '&:hover': { bgcolor: '#002a6e' },
                            }}
                        >
                            {CONTACT_EMAIL}
                        </Button>
                        <Button
                            component="a"
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profil Jakuba Kadely"
                            variant="outlined"
                            startIcon={<FaLinkedin />}
                            sx={{ borderColor: 'divider', color: 'text.primary' }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            component="a"
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profil Jakuba Kadely"
                            variant="outlined"
                            startIcon={<FaGithub />}
                            sx={{ borderColor: 'divider', color: 'text.primary' }}
                        >
                            GitHub
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Section>
    );
}
