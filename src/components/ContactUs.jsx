import React from "react";

export class ContactUs extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state={
            name:"",
            email:"",
            message:"",
            info:""
        }
    }
    sendForm(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("message", this.state.message);
        fetch("http://q9295615.beget.tech/php/getMessages.php", {
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                console.log(result)
                if(result.result === "success"){
                    this.setState({
                        info: "Ваше сообщение отправлено"
                    })
                }else{
                    this.setState({
                        info: ""
                    })
                }
            })
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <section className="contact_section ">

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center d-md-block">
                                <h3 style={{color:"white"}}>
                                    Контакты
                                </h3>
                            </div>
                            <form onSubmit={this.sendForm}>
                                <div className="contact_form-container">
                                    <div>
                                        <div className="mt-3">
                                            <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Имя"/>
                                        </div>
                                        <div className="mt-3">
                                            <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="mt-3">
                                            <textarea value={this.state.message} onChange={this.handleInputChange} name="message" type="text" className="form-control" placeholder="Сообщение"/>
                                            <p style={{color:"white"}}>{this.state.info}</p>
                                        </div>

                                        <div className="mt-5">
                                            <div className="hero_btn-container">
                                                <input className="call_to-btn btn_white-border" type="submit" value="Отправить"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_img-box">
                                <img src="images/students.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
