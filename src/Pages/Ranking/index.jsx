import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCardImage } from "mdb-react-ui-kit";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import RankingCard from "../../Components/RankingCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Ranking() {
  const [listaUsers, setListaUsers] = useState([
    {
      nome: "Mara Eliza Sales Sampaio",
      xp: 7259,
      data: "20/06/2023",
      img: "https://i.postimg.cc/hjk16MX7/image.png",
    },
    {
      nome: "Renato Alves Júnior",
      xp: 4520,
      data: "11/01/2023",
      img: "https://i.postimg.cc/RC1tvv8Y/zoro.jpg",
    },
    {
      nome: "Gabriel da Silva Santos",
      xp: 5380,
      data: "15/03/2024",
      img: "https://i.postimg.cc/d1p5vwx3/luffy.jpg",
    },
    {
      nome: "Gonçalves Felipe Neto",
      xp: 230,
      data: "01/06/2024",
      img: "https://i.postimg.cc/NMBgDv4y/karoo.jpg",
    },
  ]);
  const ordenar = () => {
    listaUsers.sort((u1, u2) => {
      return u2.xp - u1.xp;
    });
    setListaUsers([...listaUsers]);
  };
  useEffect(() => {
    ordenar();
  }, [listaUsers]);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Header />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
      
          <MDBCol className="title" lg="4">
          <MDBCardImage
              src="https://i.postimg.cc/htY794BK/trof-u.png"
              className="rankImg"
              alt="troféu"
            />
            RANKING
          </MDBCol>
        </MDBRow>

        {listaUsers.map((user, i) => (
          <RankingCard
            nome={user.nome}
            xp={user.xp}
            data={user.data}
            img={user.img}
            rank={i + 1}
          />
        ))}
      </MDBContainer>
      <Footer />
    </section>
  );
}
