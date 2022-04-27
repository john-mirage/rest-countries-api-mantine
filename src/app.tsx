import GlobalStyles from "@assets/styles/global-styles";
import TopAppBar from "@components/top-app-bar";
import {Box, ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import theme from "@assets/styles/theme";
import {useLocalStorage} from "@mantine/hooks";
import Container from "@components/container";
import {Outlet} from "react-router-dom";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{...theme, colorScheme}}>
        <GlobalStyles/>
        <TopAppBar/>
        <Box component="main">
          <Container>
            <Outlet />
          </Container>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
