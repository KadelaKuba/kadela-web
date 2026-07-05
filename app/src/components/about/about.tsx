import { Box, Stack, Typography } from "@mui/material";
import { Section } from "@kadela/components/layout/section";
import { SYNTAX } from "@kadela/theme";

const START_OF_CAREER_YEAR = 2017;

export function About() {
    const numberOfYears = new Date().getFullYear() - START_OF_CAREER_YEAR;

    return (
        <Section id="about" muted>
            <Stack spacing={3} maxWidth={760}>
                <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700 }}
                >
                    O mně
                </Typography>

                <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.85 }}>
                    Věnuji se vývoji{' '}
                    <Box component="strong" sx={{ color: SYNTAX.accent, fontWeight: 600 }}>
                        webových aplikací
                    </Box>
                    , především jejich backendu v PHP. Nejčastěji pracuji na projektech
                    z oblasti{' '}
                    <Box component="strong" sx={{ color: SYNTAX.accent, fontWeight: 600 }}>
                        e-commerce
                    </Box>
                    , a to s frameworky jako{' '}
                    <Box component="strong" sx={{ color: SYNTAX.keyword, fontWeight: 600 }}>Symfony</Box>,{' '}
                    <Box component="strong" sx={{ color: SYNTAX.keyword, fontWeight: 600 }}>Nette</Box>{' '}
                    a{' '}
                    <Box component="strong" sx={{ color: SYNTAX.keyword, fontWeight: 600 }}>Slim</Box>.
                </Typography>

                <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.85 }}>
                    Baví mě{' '}
                    <Box component="strong" sx={{ color: SYNTAX.keyword, fontWeight: 600 }}>
                        clean code
                    </Box>{' '}
                    techniky a návrh architektury – rád hledám řešení, která budou čitelná
                    a udržovatelná i po delší době. K tomu patří jednotkové testy, statická
                    analýza a srozumitelná struktura.
                </Typography>

                <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.85 }}>
                    Programování se věnuji už{' '}
                    <Box component="strong" sx={{ color: SYNTAX.number, fontWeight: 600 }}>
                        {numberOfYears} let
                    </Box>
                    . V poslední době se seznamuji s vývojem frontendových aplikací v Reactu –
                    baví mě poznávat svět z druhé strany API.
                </Typography>

                <Box
                    sx={{
                        mt: 2,
                        pl: 2,
                        borderLeft: '3px solid',
                        borderColor: SYNTAX.accent,
                        color: 'text.secondary',
                        fontStyle: 'italic',
                    }}
                >
                    „Code is read more often than it is written."
                </Box>
            </Stack>
        </Section>
    );
}
