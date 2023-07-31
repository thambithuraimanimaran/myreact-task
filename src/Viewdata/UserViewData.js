import React from "react";
import BaseApp from "../Basedata/Base";
import { useParams } from "react-router-dom";


export function UserViewdata({ user }) {
    const { id } = useParams();
    const person = user[id]
    console.log(person)
    return (
        <BaseApp>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="card tamil m-4">
                    <div className="card-header">
                        <h2>{person.name}</h2>
                    </div>
                    <div className="card-body">
                        <p>Age : {person.age}</p>
                        <p>Email : {person.email}</p>
                        <p>Exp : {person.experience}</p>
                    </div>


                </div>

            </div>

        </BaseApp>
    )
}