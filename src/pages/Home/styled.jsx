import styled from "styled-components";

const HeroInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.main};
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.main};
`;

export { HeroInner, HeroTitle, HeroSubtitle };
