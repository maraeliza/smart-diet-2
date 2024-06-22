import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBTableBody,
    MDBInput,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Alimentos() {
    const products = [
        { name: 'Arroz', weight: '200g', },
        { name: 'Feijão', weight: '150g', },
        { name: 'Bife', weight: '200g' },
    ]

    const [data, setData] = useState(products);
    const [toAdd, setToAdd] = useState({});

    const addProduct = () => {
        setData([...data, toAdd]);
    }

    return (
        <>
            <MDBContainer>
                <MDBRow fluid>
                    <MDBCol>
                        <MDBTable hover responsive className="text-center" bordered borderColor="dark">
                            <thead>
                                <tr>
                                    <th scope="col">Alimento</th>
                                    <th scope="col">Peso</th>
                                    <th scope="col">Remover</th>
                                </tr>
                            </thead>

                            <MDBTableBody>
                                {data.map((product) => (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.weight}</td>
                                        <td><Button onClick={() => setData(data.filter((p) => p.name !== product.name))}><MDBIcon fas icon="trash" /></Button></td>
                                    </tr>
                                ))}
                                <tr>
                                    <th><MDBInput type="text" placeholder="Nome do Alimento" className="text-center" onChange={(e) => setToAdd({ ...toAdd, name: e.target.value })} /></th>
                                    <td><MDBInput type="number" placeholder="Quantidade" className="text-center w-2" size="2" onChange={(e) => setToAdd({ ...toAdd, weight: e.target.value + "g" })} /></td>
                                    <td><Button onClick={addProduct}>Adicionar</Button></td>
                                </tr>

                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )

}