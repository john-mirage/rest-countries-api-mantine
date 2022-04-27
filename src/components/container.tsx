import { createStyles } from "@mantine/core";
import { PropsWithChildren } from "react";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,

        [`@media screen and (min-width: ${theme.breakpoints.xs}px)`]: {
            maxWidth: theme.breakpoints.xs,
            marginLeft: "auto",
            marginRight: "auto",
        },

        [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: theme.breakpoints.sm,
        },

        [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: theme.breakpoints.md,
        },

        [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
            maxWidth: theme.breakpoints.lg,
        },

        [`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
            maxWidth: theme.breakpoints.xl,
        },
    },
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
}));

function Container({ children, topAppBar }: PropsWithChildren<{ topAppBar?: boolean }>) {
    const { classes, cx } = useStyles();

    return (
        <div className={ cx(classes.container, { [classes.flexContainer]: topAppBar }) }>
            { children }
        </div>
    );
}

export default Container;