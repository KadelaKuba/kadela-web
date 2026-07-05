import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SYNTAX } from "@kadela/theme";

export const Tok = {
    keyword: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.keyword }}>{children}</Box>
    ),
    string: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.string }}>{children}</Box>
    ),
    number: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.number }}>{children}</Box>
    ),
    variable: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.variable }}>{children}</Box>
    ),
    fn: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.function }}>{children}</Box>
    ),
    comment: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.comment, fontStyle: 'italic' }}>{children}</Box>
    ),
    punct: ({ children }: { children: ReactNode }) => (
        <Box component="span" sx={{ color: SYNTAX.text }}>{children}</Box>
    ),
};
