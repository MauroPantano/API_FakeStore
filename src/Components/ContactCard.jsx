import React from 'react'
import { Card } from 'react-bootstrap';

const ContactCard = (props) => {
    return (
      <Card style={{ width: '18rem', display: 'flex'}} onClick={props.onClick}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text style={{width: 150,position: 'relative', left: 10, fontWeight: 'bold'}}>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default ContactCard;
