import React from "react";
export class Main extends React.Component{
    render() {
        return (
            <div className="top_container">
                <header className="header_section">
                    <div className="container">
                    </div>
                </header>
                <section className="hero_section ">
                    <div className="hero-container container">
                        <div className="hero_detail-box">
                            <h3>
                                Сервис по изучению языка в вашем кармане
                            </h3>
                            <p>
                                Поможем определить, структурировать
                                <br/>
                                и пополнить ваш словарный запас.
                            </p>

                            <div className="hero_btn-container">
                                <a href="/about" className="call_to-btn btn_white-border">
                                    Больше информации
                                </a>
                            </div>

                        </div>
                        <div className="hero_img-container">
                            <div>
                                <img src="images/png.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}