import { Global } from "@mantine/core";

function GlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
                body: {
                    margin: 0,
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
        />
    );
}

export default GlobalStyles;