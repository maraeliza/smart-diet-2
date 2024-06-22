import React, {useState, useEffect} from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function RankingCard({ nome, xp, data, img, rank }) {
  const [classe, setClass] = useState('')

  useEffect(() => {
    if (rank == 1) {
      setClass('cardOuro')
    } else if (rank == 2) {
      setClass('cardPrata')
    } else if (rank == 3) {
      setClass('cardBronze')
    }
  }, [rank]);

  return (
    <MDBCard className="card my-3">
      <MDBCardBody className={classe}> 
        <MDBRow className=" justify-content-left p-3">
          <MDBCol lg="1">
            <MDBCardText className="my-3 rank">{rank}º</MDBCardText>
          </MDBCol>
          <MDBCol lg="2">
            <MDBCardImage
              className="rounded perfilImg"
              src={img}
              alt="avatar"
            />
          </MDBCol>
          <MDBCol lg="8">
            <MDBCardText className="text-muted my-3 nome">{nome}</MDBCardText>
            <MDBCardText className="text-muted my-3 xp">{xp} XP</MDBCardText>
            <MDBCardText className="text-muted my-3 data">
              Usuário desde {data}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
