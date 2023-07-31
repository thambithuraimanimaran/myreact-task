import React from "react";

export default function BaseApp({ children }) {
    return (

        <div className="bg">
            <div className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 fw-bold" href="/">Dashboard</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand" href="/AddUser">AddUser</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-brand" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="title d-flex justify-content-center text-center ">{children}</div>

            <div className="container-fluid   ">
                <footer className="card-footer text-center fs-6 fw-bold">
                    <div>Contact us</div>
                    <div>Email : text.10101.mail@gmail.com</div>
                    <div>Copyrights@2023</div>
                </footer>
            </div>
        </div>







    )
}