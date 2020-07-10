import Head from "next/head";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  ResponsiveEmbed
} from "react-bootstrap";
import Navbar from "../components/NavBar";
import DefaultButton from "../components/DefaultButton";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import HRSection from "../components/HrComponent";
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
        <Container fluid>
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
        <section className="primary-color-bg worship-section section-padding">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col>
                <p className="text-center">
                  <strong>WORSHIP WITH US THIS SUNDAY</strong>
                </p>
              </Col>
              <Col sm={10}>
                <DefaultButton bg="bg-white" content="First Service: 6:30AM" />
                <DefaultButton bg="bg-white" content="Second Service: 8:10AM" />
                <DefaultButton bg="bg-white" content="Third Service: 9:15AM" />
                <DefaultButton
                  bg="bg-white"
                  content="Fourth Service: 10:20AM"
                />
                <DefaultButton bg="bg-white" content="Fifth Service: 12:00PM" />
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className="section-padding-big">
        <Container fluid>
          <Row className="justify-content-center  align-items-center ">
            <Col sm={9} className="" lg={{ order: "last" }}>
              <div className="embed-container ">
                <ResponsiveEmbed aspectRatio="16by9">
                  <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/Q2SlMhRQjUM"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </ResponsiveEmbed>
              </div>
            </Col>
            <Col sm={3} className="align-left">
              <img src="/images/offering.png" alt="" className="img-fluid" />
            </Col>
          </Row>
          <section className="section-padding">
            <Row className="justify-content-center ">
              <Col sm={8}>
                <DefaultButton bg="" content="Give" />
                <DefaultButton bg="" content="Prayer Request" />
                <DefaultButton bg="" content="New Convert" />
                <DefaultButton bg="" content="Share Testimony" />
              </Col>
            </Row>
          </section>
        </Container>
      </section>

      {/* start of the outreach section */}

      <section>
        <HRSection title="Our Outreach">
          <div className="section-padding">
            <Row>
              <Col sm={3}>
                <div className="img-space">
                  <img
                    src="/images/outreach-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img
                    src="/images/outreach-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img
                    src="/images/outreach-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img
                    src="/images/outreach-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </HRSection>
      </section>

      {/* end of the outreach section */}

      <section className="section-padding-big">
        <HRSection title="Our Outreach">
          <div className="section-padding">
            <Row>
              <Col sm={3}>
                <div className="img-space">
                  <img src="/images/group-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="text-center">
                  <h5>EXCELLENT MEN</h5>
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img src="/images/group-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="text-center">
                  <h5>GOOD WOMEN</h5>
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img src="/images/group-3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="text-center">
                  <h5>REIGNING CHAMPS (YOUTH)</h5>
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-space">
                  <img src="/images/group-4.jpg" alt="" className="img-fluid" />
                </div>
                <div className="text-center">
                  <h5>CHILDREN</h5>
                </div>
              </Col>
            </Row>
          </div>
        </HRSection>
      </section>

      <footer className="cntr-footer"></footer>
    </>
  );
}
