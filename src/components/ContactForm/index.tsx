import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import {ContactContainer, FormGroup, Span, ButtonContainer/*, WhatsappButton*/} from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="Nombre"
                  placeholder="Tu nombre"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Tu Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Tu mensaje"
                  value={values.message || ""}
                  name="Mensaje"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Enviar")}</Button>
                {/*
                <WhatsappButton
                href={'https://wa.me/51934135883'}
                target="_blank"
                rel="noopener noreferrer"
                >{t("Hablemos por WhatsApp")}
                </WhatsappButton>
                */}
              </ButtonContainer>

            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
