import React, {useState} from "react";
import "../form.css";


const Form = ()=>{
    let [name,setName] = useState("");
    let [email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let [conPass, setConPass] = useState("");
    let [msg, setMsg] = useState("");
    let [err, setErr] = useState("");

   

    function clicked(e){
        // e.preventDefault();
        if(name ==="" || email === ""|| Password === "" || conPass === ""){

            
            setErr("Error : All the fields are mandatory");
            setMsg("");
        e.preventDefault();

            
        }else{

            if(Password!==conPass){
                // alert("Password mismatching!");
                setErr("Password mismatching!");
                setMsg("");
                e.preventDefault();
            }else{
                setMsg("Successfully Signed Up!");
                setErr("");
            }
            
    }
}

    return (
        <div className="box">
           <h1>Signup</h1>
           <form className="form">
                <input type="text" placeholder="Full Name" onChange={(e)=> setName(e.target.value)} value={name}/>
                <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" onChange={(e)=> setConPass(e.target.value)}/>
                <p className="succ">{msg}</p>
                <p className="err">{err}</p>
                <button onClick={clicked}>Signup</button>
           </form>
        </div>
    )
}

export default Form;