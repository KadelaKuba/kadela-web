import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import {ThemeSwitch} from "@kadela/components/theme/themeSwitch";
import {Socials} from "@kadela/components/socials/socials";

export function Home() {
    const currentYear = new Date().getFullYear();
    const startOfTheCareerYear = 2017;
    const numberOfYears = currentYear - startOfTheCareerYear;

    return (
        <>
            <ThemeSwitch/>
            <Container>
                <Box
                    display="flex"
                    mt={{sm: 5, md: 15}}
                    gap={4}
                    flexDirection={{xs: 'column', sm: 'row'}}
                    alignItems="center"
                >
                    <Box
                        textAlign={'left'}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        gap={1}
                        alignItems="center"
                    >
                        <img style={{borderRadius: '50%'}} src="/assets/avatar.jpg" width={200} alt="Jakub Kadela"/>
                        <h2>
                            <strong> Jakub Kadela</strong>
                        </h2>
                        <Box>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Software developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" py={{sm: 0, md: 5}} display="flex" flexDirection="column" gap={5}>
                        <Box>
                            Věnuji se vývoji backendových aplikací, převážně v PHP. Mám zkušenosti s PHP frameworky jako Symfony a Slim.
                            Rád zkoumám techniky testování a kvality kódu. Programování se věnuji už {numberOfYears} let.

                            <br/><br/>
                            V poslední době se seznamuji s vývojem frontendových aplikací v Reactu.
                        </Box>
                        <Socials/>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
