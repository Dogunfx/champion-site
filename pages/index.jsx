import Head from "next/head";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Navbar from "../components/NavBar";
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
                <p className="p-4">
                  2020 for us in Champion Cathedral Family is Our year of a New
                  Dawn, Divine Recognition and Multiple Victories. This will
                  surely be your best year ever, in Jesus Name.
                </p>
                <hr />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>

      <footer className="cntr-footer"></footer>
    </>
  );
}
