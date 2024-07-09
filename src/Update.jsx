import React from 'react'
import { useState } from 'react';
function Update(props) {
    // const [name, setcount] = useState([]);

    return (

        <>
            {

                props.name.map((item) =>
                    <h4>{item}</h4>

                )
            }
            {
                <button onClick={props.add} >Add</button>
            }
        </>


    )
    console.log(props);
}

export default Update