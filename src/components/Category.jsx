import React from "react";

export class Category extends React.Component{
    render() {
        return (
            <section className="contact_section ">
                <div className="container rounded mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle"></div>
                                <span>Погода и времена года</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Семья. Друзья</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Внешность</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Хобби и свободное время</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Спорт</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Одежда</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Еда</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Природа</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Профессии</span>
                            </div>
                            <div className="text-btn-group my-3">
                                <div className="text-btn rounded-circle" onClick="getCategory"></div>
                                <span>Фрукты</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_img-container">
                                <img src="images/why.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


