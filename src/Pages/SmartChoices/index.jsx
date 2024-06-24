import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCardImage, MDBInput, MDBTextArea, MDBCollapse } from "mdb-react-ui-kit";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function SmartChoices() {

  const [open, setOpen] = useState(false) 

  const [listaAlimentos, setListaAlimentos] = useState([
    {
      nome: "Biscoito Recheado Nikito Chocolate com Morango 135G",
      peso: 120,
      kcal: 572,
      img: "https://i.postimg.cc/hjk16MX7/image.png",
      taxa: 476.6
    },
    {
      nome: "Macarrão Instantâneo de Carne Nissin Miojo Lámen",
      peso: 80,
      kcal: 374,
      img: "https://i.postimg.cc/CxwJkWnn/604584.webp",
      taxa: 467.5
    },

    {
      nome: "Barra de Chocolate Lacta ao Leite 80g",
      peso: 80,
      kcal: 419.2,
      img: "https://i.postimg.cc/Xq8BbDjt/barra.png",
      taxa: 524
    },

    {
      nome: "Barra de Chocolate Lacta Branco 80g",
      peso: 80,
      kcal: 419.2,
      img: "https://i.postimg.cc/Xq8BbDjt/barra.png",
      taxa: 541
    },
    {
      nome: "MC FISH",
      peso: 150,
      kcal: 375.45,
      img: "https://i.postimg.cc/hjk16MX7/image.png",
      taxa: 250.3
    },
    {
      nome: "Sorvete de chocolate",
      peso: 120,
      kcal: 572,
      img: "https://i.postimg.cc/hjk16MX7/image.png",
      taxa: 216
    },

  ]);
  const ordenar = () => {
    listaAlimentos.sort((u1, u2) => {
      return u2.xp - u1.xp;
    });
    setListaAlimentos([...listaAlimentos]);
  };
  useEffect(() => {
    ordenar();
  }, [listaAlimentos]);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Header />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">

          <MDBCol className="title" lg="4">
            Smart Choices
          </MDBCol>
        </MDBRow>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Alimentos
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >Nikito</Dropdown.Item>
            <Dropdown.Item >Miojo</Dropdown.Item>
            <Dropdown.Item >Barra de chocolate</Dropdown.Item>
            <Dropdown.Item >Mc Fish</Dropdown.Item>
            <Dropdown.Item >Mc Burguer</Dropdown.Item>
            <Dropdown.Item >Sorvete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <MDBCollapse open={open} className='mt-3 inputs'>
          <MDBTextArea   type='text' size='lg'></MDBTextArea>
          <MDBInput ></MDBInput>
          <MDBInput ></MDBInput>
        </MDBCollapse>

      </MDBContainer>
      <Footer />
    </section>
  );
}
