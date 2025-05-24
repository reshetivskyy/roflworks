import { NavLink } from "react-router";
import Styled from "./styled";

import { Container } from "@styles/Layout";

import logo from "@img/logo.png";
import burger from "@img/burger.svg";

const Header = () => {
    return (
        <Styled.Header>
            <Container>
                <Styled.HeaderInner>
                    <NavLink to="/">
                        <Styled.Logo>
                            <Styled.LogoImg src={logo} alt="Logo" />
                            <Styled.LogoText>Roflworks</Styled.LogoText>
                        </Styled.Logo>
                    </NavLink>
                    <Styled.Nav>
                        <Styled.Burger>
                            <Styled.BurgerIcon src={burger} />
                        </Styled.Burger>
                        <Styled.NavList>
                            <Styled.NavItem>
                                <NavLink to="/">
                                    <Styled.NavLink>Home</Styled.NavLink>
                                </NavLink>
                            </Styled.NavItem>
                            <Styled.NavItem>
                                <NavLink to="/about">
                                    <Styled.NavLink>About</Styled.NavLink>
                                </NavLink>
                            </Styled.NavItem>
                            <Styled.NavItem>
                                <NavLink to="/contact">
                                    <Styled.NavLink>Contact</Styled.NavLink>
                                </NavLink>
                            </Styled.NavItem>
                        </Styled.NavList>
                    </Styled.Nav>
                </Styled.HeaderInner>
            </Container>
        </Styled.Header>
    );
};

export default Header;
