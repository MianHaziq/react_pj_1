import React from "react";
import "./Card.css"

function Card(props) {
    console.log(props);

    return (
       
          
<div className="Cardd" >
                {
                    props.name.map((item) =>
                        <>
                        <div className="items">
                            <h3> {item.name}</h3>
                            <h4> {item.designation}</h4>
                            <h5> {item.desc}</h5>
                            </div>
                        </>
                    )}
                    </div>
              
           

    )



}
export default Card