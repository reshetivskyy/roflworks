import styled from "styled-components";

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 20px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 80px;
    border-radius: 15px;
`;

const LogoText = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.main};
    text-transform: uppercase;
`;

const Nav = styled.nav``;

const Burger = styled.div`
    /* display: none; */
    cursor: pointer;
`;

const BurgerIcon = styled.img`
    width: 50px;
    height: 50px;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    display: none;
`;

const NavItem = styled.li``;

const NavLink = styled.p`
    color: ${({ theme }) => theme.colors.main};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 24px;
`;

const Styled = {
    Header,
    HeaderInner,
    Logo,
    LogoImg,
    LogoText,
    Nav,
    Burger,
    BurgerIcon,
    NavList,
    NavItem,
    NavLink,
};

export default Styled;
