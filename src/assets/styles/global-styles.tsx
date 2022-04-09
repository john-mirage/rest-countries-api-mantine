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
                    backgroundColor: theme.colors.dark[9],
                },
            })}
        />
    );
}

export default GlobalStyles;