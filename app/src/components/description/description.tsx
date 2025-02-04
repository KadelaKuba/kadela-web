import {Box, Typography} from "@mui/material";
import {Socials} from "@kadela/components/socials/socials";

export function Description() {
    const currentYear = new Date().getFullYear();
    const startOfTheCareerYear = 2017;
    const numberOfYears = currentYear - startOfTheCareerYear;

    return (
        <Box width="100%" py={{sm: 0, md: 5}} display="flex" flexDirection="column" gap={3}>
            <Typography align="justify">
                Věnuji se vývoji backendových aplikací, převážně v PHP. Mám zkušenosti s PHP frameworky jako Symfony a Slim.
                Rád zkoumám techniky testování a kvality kódu. Programování se věnuji už {numberOfYears} let.

                <br/><br/>
                V poslední době se seznamuji s vývojem frontendových aplikací v Reactu.
            </Typography>
            <Socials/>
        </Box>
    );
}