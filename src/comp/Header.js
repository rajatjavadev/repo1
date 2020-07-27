import React from"react"
function header({name,titel}){
    return(
       <div style={{background:'yellow',padding:20}}>
           <h1>Header</h1>
           <h1>{name}</h1>
           <h3>{titel}</h3>
           <p> This React Application for bulid concept  rajat</p>
       </div>
    );
}

export default header; 