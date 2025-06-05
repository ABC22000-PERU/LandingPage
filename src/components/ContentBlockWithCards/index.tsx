import React from "react";
import { withTranslation } from "react-i18next";
import {
    SectionWrapper,
    IllustrationContainer,
    CardsContainer,
    ServiceCard,
    IconWrapper,
    CardTitle,
    CardDescription, Heading, Subheading,
} from "./styles";
import { ContentBlockWithCardsProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";

const ContentBlockWithCards: React.FC<ContentBlockWithCardsProps> = ({ title, text, mainImage, section, id, t,}) => {
    return (
        <SectionWrapper id={id}>
            <Heading>{t(title)}</Heading>
            {text && <Subheading>{text}</Subheading>}

            {mainImage && (
                <IllustrationContainer>
                   <SvgIcon src={mainImage} width="60%" height="60%" />
                </IllustrationContainer>
            )}

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
        </SectionWrapper>
    );
};

export default withTranslation()(ContentBlockWithCards);