import { Box } from "@mui/material";
import { Header } from "@kadela/components/layout/header";
import { Footer } from "@kadela/components/layout/footer";
import { Hero } from "@kadela/components/hero/hero";
import { About } from "@kadela/components/about/about";
import { Skills } from "@kadela/components/skills/skills";
import { Contact } from "@kadela/components/contact/contact";

export function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
                <Hero />
                <About />
                <Skills />
                <Contact />
            </Box>
            <Footer />
        </Box>
    );
}
