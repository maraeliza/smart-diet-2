import React, { useState, useEffect } from "react";
import {
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ProgressBar({ total, atingido, un }) {
  const [cor, setCor] = useState("info");

  const definirCor = () => {
    
    var taxa = (atingido / total) * 100;
    console.log(taxa)
    if (taxa < 20) {
      setCor("#f75823");
    } else if (taxa < 40) {
      setCor("#ff974d");
    } else if (taxa >= 40 && taxa < 60) {
      setCor("#f5dd00");
    }else if (taxa >= 60 && taxa < 70) {
      setCor("#c5f502");
    } 
    else if (taxa >= 70 && taxa < 80) {
      setCor("#aade00");
    }else if (taxa >= 80 && taxa < 90) {
      setCor("#85e302");
    } 
    else {
      setCor("#0ae302");
    }
  };
  // useEffect para executar definirCor uma vez no carregamento inicial
  useEffect(() => {
    definirCor();
  }, [atingido, total]); // O array vazio [] como segundo argumento faz com que useEffect seja executado apenas uma vez

  return (
    <MDBProgress className="m-2" >
      <MDBProgressBar
        
        striped
        animated
        width={(atingido / total) * 100}
        valuemin={0}
        valuemax={100}
        valuenow={atingido}
       
        style={{ backgroundColor: cor, color:'#000' }}
      >
        {atingido}{un}/{total}{un}
      </MDBProgressBar>
    </MDBProgress>

  );
}
