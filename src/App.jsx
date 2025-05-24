import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { darkTheme } from "theme";
import { Main } from "@styles/Layout";
import GlobalStyles from "@styles/Global";

import Home from "@pages/Home";

import Header from "@components/Header";
import Footer from "@components/Footer";

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Router>
                <Main>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                    </Routes>
                    <Footer />
                </Main>
            </Router>
        </ThemeProvider>
    );
}

export default App;
