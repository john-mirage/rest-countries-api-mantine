import GlobalStyles from "@assets/styles/global-styles";
import TopAppBar from "@components/top-app-bar";
import { Box, Container, MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <MantineProvider theme={{ fontFamily: 'Nunito Sans, sans serif', colorScheme: "dark" }}>
            <GlobalStyles />
            <TopAppBar />
            <Box component="main">
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </MantineProvider>
    );
}

export default App;
