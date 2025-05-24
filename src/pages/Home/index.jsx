import { TypeAnimation } from "react-type-animation";

import { Container } from "@styles/Layout";
import { HeroInner, HeroSubtitle, HeroTitle } from "./styled";

const Home = () => {
    return (
        <section>
            <Container>
                <HeroInner>
                    <HeroTitle>
                        <TypeAnimation
                            sequence={[
                                "Laugh on seriousness.",
                                7000,
                                "Laugh on work.",
                                7000,
                                "Laugh on plans.",
                                7000,
                            ]}
                            speed={25}
                            style={{
                                fontSize: "2em",
                                display: "inline-block",
                                textTransform: "uppercase",
                            }}
                            repeat={Infinity}
                        />
                        <HeroSubtitle>Coming soon</HeroSubtitle>
                    </HeroTitle>
                </HeroInner>
            </Container>
        </section>
    );
};

export default Home;
