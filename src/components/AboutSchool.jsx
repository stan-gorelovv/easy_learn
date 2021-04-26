import React from "react";

export class AboutSchool extends React.Component{
    render() {
        return (
            <section className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img-container">
                                <img src="images/about.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_detail-box">
                                <h3>
                                    Как это работает
                                </h3>
                                <p>
                                    В процессе обучения вы определяете слова,
                                    перевод которых не вызывает у вас затруднений.
                                    В дальнейшем такие слова не встречаются при обучении и
                                    формируют ваш словарный запас. При этом вам будет доступна статистика
                                    изученных слов, в том числе, в разрезе изучаемых тем.
                                    Знакомство с новыми словами, включая аудио/визуальный ряд,
                                    тестирование позволят увеличить словарный запас -
                                    как одну из составляющих успешного обучения иностранному языку.
                                </p>
                                <div className="">
                                    <a href="/admission" className="call_to-btn btn_white-border">
                                        Перейти к обучению
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="determine_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="determine_detail-box">
                                    <h3>
                                        Словарная выборка
                                    </h3>
                                    <p>
                                        Правильно выбранный словарный запас помогает понять довольно много
                                        при весьма скромных усилиях, потраченных на их заучивание.
                                        <br/>На заметку:
                                        200 слов покроют около 80% словоупотреблений в повседневной речи
                                        на любом языке;
                                        300 слов - примерно 85%;
                                        400 слов покроют уже около 90%;
                                        ну, а 800-1000 слов - около 95% того, что нужно будет сказать
                                        или услышать в самой обычной ситуации.
                                    </p>
                                    <div className="">
                                        <a href="/why" className="call_to-btn btn_white-border">
                                            Перейти к обучению
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </section>
            </section>

        )
    }
}