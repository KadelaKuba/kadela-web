import Typewriter from "typewriter-effect";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import {ThemeSwitch} from "@kadela/components/theme/themeSwitch";
import { Description } from "@kadela/components/description/description";

export function Home() {
    return (
        <>
            <Container>
                <ThemeSwitch/>
                <Box
                    display="flex"
                    mt={{xs: 2, sm: 5, md: 20}}
                    gap={3}
                    flexDirection={{xs: 'column', md: 'row'}}
                    alignItems="center"
                >
                    <Box
                        textAlign="left"
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        gap={1}
                        alignItems="center"
                    >
                        <img style={{borderRadius: '50%'}} src="/assets/avatar.jpg" width={200} alt="Jakub Kadela"/>
                        <Typography variant="h5" component="h5">
                            Jakub Kadela
                        </Typography>
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
                    <Description/>
                </Box>
            </Container>
        </>
    );
}
