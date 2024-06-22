import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Alimentos from "../../Components/Alimentos";
import {
  MDBCard,
  MDBIcon,
  MDBCardTitle,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import GoalsCard from "../../Components/GoalsCard";
import { Button } from "react-bootstrap";

export default function Progresso() {

  return (
    <>
      <Header />
      <MDBContainer className="p-5">
        <MDBRow fluid>
          <MDBCol>
            <MDBCard className="py-2">
              <MDBCardTitle className="text-center">
                Progresso Diário
              </MDBCardTitle>
              <MDBCardBody>
                <Alimentos />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <GoalsCard titulo="Objetivos Semanais" />
        <GoalsCard titulo="Objetivos Mensais" />
      </MDBContainer>
      <Footer />
    </>
  );
}
