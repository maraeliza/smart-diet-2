import React, { useState } from 'react';
import {
    MDBInput, MDBRow, MDBCol, MDBCardBody, MDBCard, MDBCardImage, MDBBtn, MDBProgress, MDBProgressBar,
    MDBIcon, MDBCollapse, MDBTextArea, MDBContainer
} from 'mdb-react-ui-kit';

import ProgressBar from "../../Components/ProgresBar";
import { Button } from 'react-bootstrap';
import "./goals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function GoalCard({goal, atingido, total}) {

    const [formValue, setFormValue] = useState({
        'goal': goal,
        'goalA1': atingido,
        'goalT1': total,
        'goalP1': (atingido/total) * 100,
    });
    const [aberto, setAberto] = useState(false);

    const trocar = () => {
        var inverterAberto = aberto == false;
        setAberto(inverterAberto);

    }

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })

    }
    const salvar = () => {
        
        var atingido = formValue['goalA1'] / formValue['goalT1'] * 100;

        setFormValue({ ...formValue, ['goalP1']: atingido })
        trocar();

    }

    return (


        <MDBCard className='objCard m-3 p-1' >
            <MDBContainer>
                <MDBRow tag='form' className='g-3 m-2 objLinha '>
                    <MDBCol >
                        <MDBCardImage src='https://i.postimg.cc/htY794BK/trof-u.png' className='obgImg' alt='...' />
                    </MDBCol>
                    <MDBCol>
                        <MDBCardBody className={'objTextO'} >{formValue['goal']}</MDBCardBody>
                        <Button onClick={trocar} className='btnEdit' ><MDBIcon fas icon="pencil-alt" color='black' /></Button>
                       


                  
                        <ProgressBar atingido={formValue['goalA1']} total = {formValue['goalT1']}/>
                     
                        <MDBCollapse open={aberto} className='mt-3 inputs'>
                            <MDBTextArea value={formValue['goal']} name='goal' rows='{3}' className='objIn' onChange={onChange} type='text' size='lg'></MDBTextArea>
                            <MDBInput className='objIn' type='number' onChange={onChange} value={formValue['goalA1']} name='goalA1'></MDBInput>
                            <MDBInput className='objIn' type='number' onChange={onChange} value={formValue['goalT1']} name='goalT1'></MDBInput>
                            <Button onClick={salvar} className='objBtnSave' >Salvar</Button>
                        </MDBCollapse>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBCard>

    );
}