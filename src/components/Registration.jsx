import React from "react";
import {Redirect} from "react-router-dom";

export class Registration extends React.Component{

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state={
            name:"",
            email:"",
            pass:"",
            info: "",
            redirect: false,
            submitBtn: "disabled"
        }
    }
    sendForm(event) {
        event.preventDefault();
        if (this.state.info===""){
            const formData = new FormData();
            formData.append("name", this.state.name);
            formData.append("email", this.state.email);
            formData.append("pass", this.state.pass);
            fetch("http://q9295615.beget.tech/php/handlerReg.php", {
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    console.log(result)
                    if(result.result === "success") {
                        this.setState({
                            redirect: true

                        })
                    }
                })
        }
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email"){
            const formData = new FormData();
            formData.append("email", value)
            fetch("http://q9295615.beget.tech/php/checkEmail.php", {
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                  if(result.result === "exist"){
                      this.setState({
                          info: "Такой email уже есть!",
                          submitBtn: "disabled",
                      })
                  }else{
                      this.setState({
                          info: "",
                          submitBtn: "",
                      })
                  }
                })
        }
        this.setState({
            [name]:value
        })
    }

    render() {
        const redirect = this.state.redirect;
        if (redirect) {
            return <Redirect to="/authorization"/>;
        } else {
            return (

                <section className="cabinet_section">
                    <div id="container_demo">

                        <div id="wrapper">
                            <div id="subscribe" className="animate form">
                                <div className="col-sm-5 mx-auto">
                                    <form onSubmit={this.sendForm}>
                                        <h3 style={{color: "white"}}> Регистрация </h3>

                                        <div className="mb-3">
                                            <input value={this.state.name} onChange={this.handleInputChange} name="name"
                                                   type="text" className="form-control"
                                                   placeholder="login"/>
                                        </div>

                                        <div className="mb-3">
                                            <input value={this.state.email} onChange={this.handleInputChange}
                                                   name="email" type="text" className="form-control"
                                                   placeholder="email"/>
                                            <p style={{color: "white"}}>{this.state.info}</p>


                                        </div>

                                        <div className="mb-3">
                                            <input value={this.state.pass} onChange={this.handleInputChange} name="pass"
                                                   type="password" className="form-control"
                                                   placeholder="pass"/>
                                        </div>

                                        {/*<div className="mb-3 text-center">
                                           <input type="submit" disabled={this.state.submitBtn} value="Отправить" className="btn btn-primary"/>
                                        </div>
                                        */}

                                       <div className="mb-3 text-center">
                                            <input type="submit" value="Отправить" className="call_to-btn btn_white-border"/>
                                        </div>
                                        <p className="change_link">
                                            <h5 style={{color: "white"}}>Уже зарегистрированны?</h5>
                                            <a href="/authorization" className="to_subscribe"> <p style={{color: "white"}}>Пройдите авторизацию</p>
                                            </a>
                                        </p>
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