import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "../Basedata/Base";

export function AddUser({user,setUser}){
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const [experience,setExperience] = useState("");

    const history = useHistory();

    const AddnewUser = ()=>{
        const newUserList ={
            id,
            name,
            age,
            email,
            experience
        }
        setUser([...user,newUserList])
        history.push("/")
    }
    return(
      
        <BaseApp>
        <div className="d-flex flex-wrap justify-content-center align-items-center vh-100">
            <div className="bg-dark form p-3 width1">
                <h2 className="card-text text-light">Add new User</h2>
                <div className="input-group my-3">
                    <input placeholder="id" className="form-control rounded-pill"
                    value={id}
                    onChange={(event)=>setId(event.target.value)}/>
                </div>
                <div className="input-group my-3">
                    <input placeholder="name" className="form-control  rounded-pill"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div className="input-group my-3">
                    <input placeholder="age" className="form-control  rounded-pill"
                    value={age}
                    onChange={(event)=>setAge(event.target.value)}/>
                </div>
                <div className="input-group my-3">
                    <input placeholder="email" className="form-control  rounded-pill"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="input-group my-3">
                    <input placeholder="experience" className="form-control  rounded-pill"
                    value={experience}
                    onChange={(event)=>setExperience(event.target.value)}/>
                </div>
                <div className="d-flex flex-wrap justify-content-center ">
                    <button className="btn btn-primary px-5  rounded-pill"
                    onClick={AddnewUser}>Add</button>
                </div>
            </div>
        </div>
       
    </BaseApp>
       
 )
}