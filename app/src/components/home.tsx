import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

export function Home() {
    return (
        <Container>
            <Box display="flex" mt={{sm: 5, md: 20}} gap={4} flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
                <Box textAlign={'left'} display="flex" flexDirection="column" width="100%" gap={1} alignItems="center">
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
                        Rád zkoumám techniky testování a kvality kódu. Programování se věnuji již 7 rokem.

                        <br/><br/>
                        V poslední době se seznamuji s vývojem frontendových aplikací v Reactu.
                    </Box>
                    <Box display="flex" gap={2} justifyContent={"right"}>
                        <a href={'https://www.linkedin.com/in/jakub-kadela/'}>
                            <FaLinkedin className={"social-icons"} size={40}/>
                        </a>
                        <a href={'https://github.com/KadelaKuba'}>
                            <FaGithub className={"social-icons"} size={40}/>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
