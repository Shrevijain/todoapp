import React from "react";

// function Demo1(){
//     return (
//         <div>
//             <h1>Hello Duniya from fuction component!</h1>
//         </div>
//     )
// }

// export default Demo1;

const Demo1 = (props) => (
        <div>
            <h1>Hello from function component</h1>
            <h3>{props.Title}</h3>
        </div>
    )

export default Demo1;