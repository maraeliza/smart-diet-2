import React, { useState, useEffect } from "react";

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
import GoalCard from "../../Components/GoalCard";
import { Button } from "react-bootstrap";

export default function GoalsCard({titulo}) {
  const [cards, setCards] = useState([
    [
      {
        goal: "Ganhar +20% de massa muscular",
        atingido: 10,
        total: 20,
      },
      {
        goal: "Perder 30% de gordura corporal",
        atingido: 10,
        total: 30,
      },
    ],
  ]);

  const addGoals = () => {
    if (cards[cards.length - 1].length < 2) {
      cards[cards.length - 1].push({ goal: "", atingido: 0, total: 0 });
      setCards([...cards]);
    } else {
      setCards([...cards, [{ goal: "", atingido: 0, total: 0 }]]);
    }
  };

  const removeGoal = (index, i) => {
    delete cards[index][i];
    setCards([...cards]);
  };
  useEffect(() => {
  }, [cards]); // Atualiza a cor sempre que atingido ou total mudarem

  return (
    <MDBContainer className="my-4">
      <MDBRow fluid >
        <MDBCol>
          <MDBCard className="py-4">
            <MDBCardTitle className="text-center">{titulo}</MDBCardTitle>
            <Button className="btnAdd" onClick={addGoals}>
              <MDBIcon fas icon="add" color="black" />
            </Button>
            {cards.map((goal, index) => {
              console.log(cards);
              return (
                <MDBCardBody className="cardGoal justify-content-center" key={index.toString()}>
                  {goal.map((item, i) => {
                    return (
                      <div key={i.toString()}>
                        <Button
                          className="btnExcluir"
                          onClick={() => removeGoal(index, i)}
                        >
                          <MDBIcon fas icon="trash" color="black" />
                        </Button>
                        <GoalCard
                          goal={item.goal}
                          atingido={item.atingido}
                          total={item.total}
                        />
                      </div>
                    );
                  })}
                </MDBCardBody>
              );
            })}
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
