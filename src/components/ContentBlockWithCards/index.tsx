import React from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import {
    SectionWrapper,
    IllustrationContainer,
    CardsContainer,
    ServiceCard,
    IconWrapper,
    CardTitle,
    CardDescription, Heading, Subheading, ContentWrapper,
} from "./styles";
import { ContentBlockWithCardsProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";

const ContentBlockWithCards: React.FC<ContentBlockWithCardsProps> = ({ title, text, mainImage, section, id, t,}) => {
    return (
        <SectionWrapper id={id}>
            <Fade direction="up" triggerOnce>
            <Heading>{t(title)}</Heading>
            {text && <Subheading>{text}</Subheading>}
            </Fade>

            <ContentWrapper>
            {mainImage && (
                <Fade direction="left" triggerOnce>
                <IllustrationContainer>
                   <SvgIcon src={mainImage} width="100%" height="100%" />
                </IllustrationContainer>
                </Fade>
            )}

            <Fade direction="right" triggerOnce>
            <CardsContainer>
                {section.map((item, idx) => (
                    <ServiceCard key={idx}>
                        <IconWrapper>
                            <SvgIcon src={item.icon} width="48px" height="48px" />
                        </IconWrapper>
                        <CardTitle>{t(item.title).toUpperCase()}</CardTitle>
                        <CardDescription>{t(item.content)}</CardDescription>
                    </ServiceCard>
                ))}
            </CardsContainer>
            </Fade>
        </ContentWrapper>
        </SectionWrapper>
    );
};

export default withTranslation()(ContentBlockWithCards);