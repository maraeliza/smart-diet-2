import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Feed() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Header />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
            
          <MDBCol lg="4">
          <span>FEED</span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </section>
  );
}
