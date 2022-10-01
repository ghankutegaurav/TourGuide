import React from "react";
import { Button, Card } from "react-bootstrap";

export const Contact = () => {

    const contactinfo = [
        {name: "Aniket More", contact:"9769733646"},
        {name: "Dipak Kasar", contact:"7972087203"},
        {name: "Gaurav Ghankute", contact:"8425023134"},
        {name: "Tejas Daidawar", contact:"8007250883"},
        {name: "Ujwal Yangalwar", contact:"7387781178"},
    ]

    const renderCard = (infoo, index)=>{
        return (
            <div className="boxx">
              <Card>
                <Card.Body>
                  <Card.Title>{infoo.name}</Card.Title>
                  <Card.Text>
                    Contact no: {infoo.contact}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
    }

  return (
    <div className="grid">
    {contactinfo.map(renderCard)}
    </div>
  );
};
