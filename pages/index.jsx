import Head from "next/head";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Navbar from "../components/NavBar";
import DefaultButton from "../components/DefaultButton";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <Head>
        <title>HOME | RCCG Champion Cathedral Family</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="banner">
        <Navbar />
        <Jumbotron fluid>
          <Container className="text-center">
            <Row className="justify-content-center">
              <Col xs={8}>
                <h1 className="default-button">
                  <span className="">WELCOME HOME</span>
                </h1>
                <p className="p-4 no-padding-sm">
                  <em>
                    <strong>2020</strong> for us in Champion Cathedral Family is
                    Our year of <strong> A New Dawn</strong>, Divine Recognition
                    and Multiple Victories. This will surely be your best year
                    ever, in Jesus Name.
                  </em>
                </p>
                <hr />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col sm={10}>
              <div className="text-center">
                <p className="p-4 no-padding-sm">
                  Welcome to RCCG, Champion Cathedral Family. We are delighted
                  to have you and we pray that the joy of the Almighty fill your
                  heart as you flow with us, For in His presence, there is
                  fulness of Joy and at His right hand there are pleasures
                  forevermore, if you ara a first time visitor, please do visit
                  us one of this sundays in His presence have a wonderful and
                  fruitful stay in God's presence
                </p>
                <h4>
                  <em>Pastor Emmanuel Emefienim </em>
                </h4>
                <p>
                  <em>(Pastor in charge, RCCG Champions Cathedral Family)</em>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center text-center align-items-center">
            <Col sm={2}>
              <p>NEW HERE?</p>
            </Col>
            <Col sm={3}>
              <DefaultButton content="Mail Us" icon={faEnvelope} />
            </Col>
            <Col sm={3}>
              <DefaultButton content="Find Location" icon={faMapMarker} />
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="cntr-footer"></footer>
    </>
  );
}
