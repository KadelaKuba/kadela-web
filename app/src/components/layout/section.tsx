import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

type SectionProps = {
    id: string;
    children: ReactNode;
    muted?: boolean;
};

export function Section({ id, children, muted = false }: SectionProps) {
    return (
        <Box
            id={id}
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                scrollMarginTop: 80,
                bgcolor: muted ? '#f6f8fa' : 'transparent',
                borderTop: muted ? '1px solid' : 'none',
                borderBottom: muted ? '1px solid' : 'none',
                borderColor: 'divider',
            }}
        >
            <Container>{children}</Container>
        </Box>
    );
}
