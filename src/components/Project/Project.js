import React from 'react';
import { Button,Jumbotron,Card,CardColumns} from 'react-bootstrap';
import { Zoom, } from 'react-reveal';
import PData from './PData';



function Project() {
  return (
    <>
    <Jumbotron fluid className='bg-white'>
    <Zoom>
      <h1 className="p-3 m-3 text-center font-weight-bold">Projects</h1>
    </Zoom>
    <br></br>
    <br></br>
    <br></br>
    <CardColumns fluid className='mr-2 ml-2'>
      
      {
        PData.map((item)=>(
          
          <Zoom {...item.anim}>
            <Card key={item.id} border="dark">
        <Card.Img src={item.imgsrc} varient="top"/>
        <Card.Body>
          <Card.Title >
            {item.titile}
          </Card.Title>
          <Card.Text>
            {item.desc}
          </Card.Text>
        </Card.Body>
        <footer>
        <Button className="ml-5 mb-3 mr-5" rel="noopener noreferrer" target="blank" href={item.btnurl} variant={(item.buttontitle==='GitHub'||item.buttontitle==='WordPress Site'?'dark':'success')}>{item.buttontitle}</Button>
        </footer>
        </Card>
          </Zoom>
        ))
      }
     
      
    </CardColumns>
    </Jumbotron>

  </>
  )}

export default Project;


