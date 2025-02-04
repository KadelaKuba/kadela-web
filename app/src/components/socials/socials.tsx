import {Box} from "@mui/material";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SocialsBoxStyle} from "@kadela/components/socials/socialsBoxStyle";

export function Socials() {
    return (
        <Box display="flex" gap={2} justifyContent={"right"}>
            <a href={'https://www.linkedin.com/in/jakub-kadela/'}>
                <SocialsBoxStyle>
                    <FaLinkedin size={40} />
                </SocialsBoxStyle>
            </a>
            <a href={'https://github.com/KadelaKuba'}>
                <SocialsBoxStyle>
                    <FaGithub size={40}/>
                </SocialsBoxStyle>
            </a>
        </Box>
    );
}