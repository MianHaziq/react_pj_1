import React from "react";


function List(props) {
    console.log(props);

    return (
       
          
<div className="Lists" >
                {
                    props.name.map((item) =>
                        <>
                        <ul>
                            <li> {item.name}</li>
                            <li> {item.designation}</li>
                            <li> {item.desc}</li>
                            </ul>
                        </>
                    )}
                    </div>
              
           

    )



}
export default List