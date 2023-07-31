import React, { useState } from "react";
import BaseApp from "../Basedata/Base";
import { useHistory } from "react-router-dom";

export function UserDetails({ user, setUser }) {

    const history = useHistory();

    const DeleteUser = (index) => {
        const newDelList = user.filter((per) => per.id !== index)
        setUser(newDelList);
        console.log(newDelList)


    }

    return (
        <BaseApp>

            <div className="d-flex flex-wrap justify-content-center overflow-auto ">

                {user.map((person, idx) => (
                    <div key={idx} className="card tamil m-4 text-center">
                        <div className="card-header">
                            <h2>{person.name}</h2>
                        </div>
                        <div className="card-body">
                            <p>Age : {person.age}</p>
                            <p>Email : {person.email}</p>
                            <p>Exp : {person.experience}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary m-1"
                            onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>

                            <button className="btn btn-warning m-1"
                                onClick={() => history.push(`/viewuser/${idx}`)}>View</button>

                            <button className="btn btn-danger m-1"
                                onClick={() => DeleteUser(person.id)}>Delete</button>
                        </div>

                    </div>

                ))}
            </div>






        </BaseApp>
    )
}