import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

/*import i18n from "i18next";*/
import {
  FooterSection,
  /*Title,*/
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  /*FooterContainer,*/
  Language,
  /*Label,
  LanguageSwitch,
  LanguageSwitchContainer,*/
} from "./styles";
/*
interface SocialLinkProps {
  href: string;
  src: string;
}
*/
const Footer = ({ t }: { t: TFunction }) => {
  /*
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };


  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  */

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contactanos")}</Language>
              <Large to="/">{t("Comencemos a trabajar juntos")}</Large>
              <Para>
                {t(`¿Tienes alguna duda? Puedes contactarme por correo electrónico.`)}
              </Para>
              <a href="mailto:abc22000@yahoo.com">
                <Chat>{t(`Conversemos`)}</Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Calle las Granadas</Para>
              <Para>Mza. K1 Lote 1A Urb. La Alborada</Para>
              <Para>Comas – Lima Perú</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            {/*
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </FooterContainer>
            */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
