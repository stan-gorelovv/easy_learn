import React from 'react';

import {Redirect} from 'react-router-dom'

export class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            redirect: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        fetch("http://q9295615.beget.tech/php/handlerAuth.php",{
            credentials: 'include',
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result === "success"){
                    this.setState({
                        redirect: true
                    })
                }
            });
    }
    render() {
        const redirect = this.state.redirect;
        if(redirect){
            return <Redirect to="/"/>;
        }else {

            return (

        <section className="cabinet_section">
            <div id="container_demo">

                <div id="wrapper">
                    <div className="container">
                        <div className="col-sm-5 mx-auto">
                            <form onSubmit={this.handleSubmit}>
                                <h3 style={{color:"white"}}> Авторизация </h3>
                                <div className="mb-3">
                                    <input value={this.state.email} onChange={this.handleInput} name="email" type="text" className="form-control" placeholder="login"/>
                                </div>
                                <div className="mb-3">
                                    <input value={this.state.pass} onChange={this.handleInput} name="pass" type="password" className="form-control" placeholder="pass"/>
                                </div>
                                <div className="mb-3 text-center">
                                    <input type="submit" value="Войти" className="call_to-btn btn_white-border"/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="determine_img-container">
                            <img src="images/determine.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            )
        }
    }
}