import React, { useState } from 'react';
import handclose from '../assets/firstY.jpg';
import Best from '../assets/best.jpg';
import Best2 from '../assets/best2.jpg';
import { Container, Image, Row, Col, Button, Collapse, Jumbotron } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';




const Home = () => {
    const [knowme, setknowme] = useState(false);
    return (
        <>
           <Jumbotron className="bg-white" fluid>
                {/* <img src={handclose}></img> */}
            <Container fluid style={{marginTop:'10%'}}>
                <Row className="md-2 p-2 mt-5 text-center">
                    <Col sm className=" d-none d-sm-block">
                        <Slide left>
                            <Image className="  p-1 shadow-lg bg-dark rounded" src={Best2} style={{ width: '100%', height: '50%', marginTop: '50px', padding: '0px' }} />

                        </Slide>

                    </Col>

                    <Col sm  className="d-none d-sm-block">
                        <Slide left>
                            <Image className=" p-1 shadow-lg bg-dark rounded" src={handclose} style={{ width: '100%', height: '50%', marginTop: '10px', }} />

                        </Slide>

                    </Col>
                    <Col sm >
                        <Slide top>
                            <Image className=" p-1 shadow-lg bg-dark rounded" src={Best} style={{ width: '100%', height: '50%', marginTop: '80px' }} />

                        </Slide>

                    </Col>
                    <Col sm={6} style={{ alignSelf: 'center', fontWeight: 'bold' }}>

                        <Slide right> <h1 style={{ fontSize: '50px', fontWeight: 'bold', marginRight: '10px'}}>Hi,I'm Tejas Gathekar</h1><Button onClick={() => setknowme(!knowme)}
                            aria-controls={knowme}
                            aria-expanded="clicked"
                            variant="outline-success">Know About me</Button>
                            <Collapse in={knowme}>
                                <div id="clicked">
                                    <br/>
                                    Strong in design and integration with intuitive problem-solving skills.
                                    Passionate about implementing and launching new projects. Ability to translate
                                    business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
                                    <br></br>
                                    <Button target="blank" href="https://www.canva.com/design/DAEUmFDJ3bk/1_-DbTbDPqXTaMiiR-fodw/view?utm_content=DAEUmFDJ3bk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" variant="dark">Resume</Button>
                        </div>
                            </Collapse>
                        </Slide>
                    </Col>



                </Row>
            </Container>
           </Jumbotron>
        </>

    );
}
export default Home;