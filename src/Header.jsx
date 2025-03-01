import { useState } from "react";

const Header = () =>{
    const [name,setName]=useState('Antony');
    return(
        <div>
            <h1>Hello {name}</h1>
            <button onClick={()=>{setName('christos')}}>change</button>
        </div>
    );
};
export default Header;