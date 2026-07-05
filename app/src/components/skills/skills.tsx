import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";
import { Section } from "@kadela/components/layout/section";
import { CodeBlock, Tok } from "@kadela/components/code/codeBlock";

const SKILLS: Record<string, string[]> = {
    backend: ['PHP', 'Symfony', 'Nette', 'Doctrine', 'RabbitMQ'],
    frontend: ['TypeScript', 'React', 'Vite', 'MUI'],
    architecture: ['DDD', 'SOLID', 'Design patterns', 'Clean code'],
    quality: ['PHPUnit', 'PHPStan', 'Rector', 'PHP CS'],
    tools: ['Docker', 'Git', 'CI / CD', 'PostgreSQL', 'MySQL', 'Elasticsearch'],
};

function buildLines(): ReactNode[] {
    const lines: ReactNode[] = [];
    lines.push(<Tok.punct>{'{'}</Tok.punct>);

    const groups = Object.entries(SKILLS);
    groups.forEach(([key, items], gi) => {
        lines.push(
            <>
                {'  '}
                <Tok.string>"{key}"</Tok.string>
                <Tok.punct>: [</Tok.punct>
            </>,
        );
        items.forEach((item, ii) => {
            const isLastItem = ii === items.length - 1;
            lines.push(
                <>
                    {'    '}
                    <Tok.string>"{item}"</Tok.string>
                    {!isLastItem && <Tok.punct>,</Tok.punct>}
                </>,
            );
        });
        const isLastGroup = gi === groups.length - 1;
        lines.push(
            <>
                {'  '}
                <Tok.punct>{isLastGroup ? ']' : '],'}</Tok.punct>
            </>,
        );
    });

    lines.push(<Tok.punct>{'}'}</Tok.punct>);
    return lines;
}

export function Skills() {
    return (
        <Section id="skills">
            <Stack spacing={3}>
                <Typography
                    variant="h2"
                    sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700 }}
                >
                    Tech stack
                </Typography>
                <CodeBlock filename="skills.json" lines={buildLines()} />
            </Stack>
        </Section>
    );
}
