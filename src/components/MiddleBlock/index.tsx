import React from "react";
import { Row, Col } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import {
  MiddleBlockSection,
  Title,
  Content,
  ContentWrapper,
  StyledList,
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  list?: string[];
}

type MiddleBlockPropsWithI18n = MiddleBlockProps & WithTranslation;

const MiddleBlock: React.FC<MiddleBlockPropsWithI18n> = ({
                                                           title,
                                                           content,
                                                           list,
                                                           t,
                                                         }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <MiddleBlockSection>
        <Slide direction="up" triggerOnce>
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Title>{t(title)}</Title>
                <Content>{content}</Content>

                {list && (
                    <StyledList>
                      {list.map((item: string, idx: number) => (
                          <li key={idx}>{item}</li>
                      ))}
                    </StyledList>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
