import React, { useEffect, useState } from "react";
import BaseApp from "../Basedata/Base";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export function EditData({ user, setUser }) {
     const [idx, setIdx] = useState("");
     const [name, setName] = useState("");
     const [age, setAge] = useState("");
     const [email, setEmail] = useState("");
     const [experience, setExperience] = useState("");

     const history = useHistory();

     const { id } = useParams();
     const person = user.find((perr) => perr.id === id);

     useEffect(() => {
          setIdx(person.id);
          setName(person.name);
          setAge(person.age);
          setEmail(person.email);
          setExperience(person.experience);
     }, [])

     const AddnewData = () => {
          const editIndex = user.findIndex(per => per.id === id);
          const Edituser = {
               id,
               name,
               age,
               email,
               experience
          }
          user[editIndex] = Edituser
          setUser([...user])
          history.push("/")




     }
     return (

          <BaseApp>
               <div className="d-flex justify-content-center align-items-center vh-100">

                    <div className="width1 p-3 bg-dark card text-center ">
                         <div className="input-group my-2">
                              <input placeholder="id" className="form-control rounded-pill"
                                   value={idx}
                                   onChange={(event) => setIdx(event.target.value)} />
                         </div>
                         <div className="input-group my-2">
                              <input placeholder="name" className="form-control rounded-pill"
                                   value={name}
                                   onChange={(event) => setName(event.target.value)} />
                         </div>
                         <div className="input-group my-2">
                              <input placeholder="age" className="form-control rounded-pill"
                                   value={age}
                                   onChange={(event) => setAge(event.target.value)} />
                         </div>
                         <div className="input-group my-2">
                              <input placeholder="email" className="form-control rounded-pill"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)} />
                         </div>
                         <div className="input-group my-2">
                              <input placeholder="experience" className="form-control rounded-pill"
                                   value={experience}
                                   onChange={(event) => setExperience(event.target.value)} />
                         </div>
                         <div className="text-center ">
                              <button className="btn btn-danger my-2 rounded-pill"
                                   onClick={AddnewData}>Save Changes</button>
                         </div>
                    </div>

               </div>

          </BaseApp>
     )
}