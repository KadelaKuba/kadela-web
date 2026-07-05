import { Home } from "@kadela/components/home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@kadela/theme";

export function App() {
    return (
        <ThemeProvider theme={theme} defaultMode="light">
            <CssBaseline />
            <Home />
        </ThemeProvider>
    );
}
