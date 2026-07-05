import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { SYNTAX } from "@kadela/theme";

type CodeBlockProps = {
    lines: ReactNode[];
    filename?: string;
    startLine?: number;
};

export function CodeBlock({ lines, filename, startLine = 1 }: CodeBlockProps) {
    return (
        <Box
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1.5,
                overflow: 'hidden',
                bgcolor: '#ffffff',
            }}
        >
            {filename && (
                <Box
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: '#f6f8fa',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        fontFamily: 'Source Code Pro, monospace',
                        fontSize: '0.78rem',
                        color: 'text.secondary',
                    }}
                >
                    {filename}
                </Box>
            )}
            <Box
                sx={{
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: { xs: '0.82rem', md: '0.9rem' },
                    lineHeight: 1.75,
                    color: SYNTAX.text,
                    py: 2,
                    overflowX: 'auto',
                }}
            >
                {lines.map((line, index) => (
                    <Stack key={index} direction="row" spacing={2} sx={{ px: 2 }}>
                        <Box
                            sx={{
                                width: 28,
                                flexShrink: 0,
                                textAlign: 'right',
                                color: SYNTAX.lineNumber,
                                userSelect: 'none',
                            }}
                        >
                            {startLine + index}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0, whiteSpace: 'pre-wrap' }}>
                            {line || ' '}
                        </Box>
                    </Stack>
                ))}
            </Box>
        </Box>
    );
}

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
