import {
    Box, FormGroup,
    useColorScheme
} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import {ThemeCustomSwitchStyle} from "@kadela/components/theme/themeCustomSwitchStyle";

export function ThemeSwitch() {
    const { mode, setMode } = useColorScheme();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(mode === 'dark');
    }, [mode]);

    if (!mode) {
        return null;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setMode(event.target.checked ? 'dark' : 'light');
    };

    return (
        <Box sx={{
            position: 'absolute',
            top: 3,
            right: 0,
            m: {xs: 0.5, md: 3}
        }}>
            <ThemeCustomSwitchStyle checked={checked} onChange={handleChange}/>
        </Box>
    );
}