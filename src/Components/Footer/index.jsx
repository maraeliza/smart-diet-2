import React, { useState } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBModal,

} from 'mdb-react-ui-kit';
import Chat from '../Chat';
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function Footer() {
    const [chatModalOpen, setChatModalOpen] = useState(false);

    const toggleChatModal = () => {
        setChatModalOpen(!chatModalOpen);
    };

    return (
        <>
            <MDBModal
                animationDirection='bottom'
                open={chatModalOpen}
                tabIndex='-1'
                onClose={() => setChatModalOpen(false)}
            >
                <Chat></Chat>
            </MDBModal>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Entre em contato através das nossas redes sociais:</span>
                    </div>

                    <div>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'red', fontFamily: 'Pacifico' }}>
                                    SmartDiet
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Empresa</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Sobre nós
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Termos de Uso
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Politica de privacidade
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Ajuda</h6>
                                <p>
                                    <MDBIcon icon="headset" className="me-2" />
                                    <span className='text-reset' onClick={toggleChatModal}>
                                        Chat de Atendimento
                                    </span>
                                </p>
                                <p>
                                    <MDBIcon icon="question-circle" className="me-2" />
                                    <a href='#!' className='text-reset'>
                                        FAQ
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Uberaba, MG 38064-190, BR
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-2" />
                                    renato.alvesjr00@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-2" />
                                    +55 34 99209-9865
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='https://iftm.edu.br/'>
                        https://iftm.edu.br
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}
