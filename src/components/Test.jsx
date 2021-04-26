import React from "react";
function Btn(props) {
    return <div className="container">
        <div className="row align-items-stretch mb-1">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <button type="button" className="btn btn-primary btn-lg rounded-circle" className="form-control"
                        onClick={() => {
                            const formData = new FormData();
                            formData.append("id", props.id)
                            fetch('http://q9295615.beget.tech/php/getIndex.php', {
                                method: "POST",
                                body: formData
                            }).then(response => response.json())
                                .then(result => {
                                    props.showWord(result.worden);
                                    console.log(result);})
                        }
                        }>{props.worden}{props.wordru}</button>
            </div>
        </div>
    </div>

}

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            word: ""
        }
        this.showWord = this.showWord.bind(this);
    }
    componentDidMount() {
        fetch("http://q9295615.beget.tech/php/getWords.php")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let rows = [];
                for (let i=0; i< result.length; i++) {
                    rows.push(<Btn key={i} showWord={this.showWord} id={result[i].id} worden={result[i].worden} wordru={result[i].wordru} />)
                }
                this.setState({
                    words: rows
                })
            })
    }

    showWord(word){
        this.setState({
            word: word
        });
    }



    render(){
        return (

            <div className="top_container">
            <section className="why_section">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="why_img-container ">

                                <img src="images/why.png" class="img-fluid" alt=""/>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="why_detail-box">
                                <h3>
                                    Тестирование
                                </h3>
                                <p>
                                    После начала тестирования вам будет предложено слово
                                    и четыре варианта его перевода, один из которых является верным.
                                    Ответ на тест вы получите после выбора варианта и нажатии кнопки "Отправить".
                                </p>
                                <p>
                                    {this.state.words}
                                </p>

                                <div className="hero_btn-container text-center">
                                    <a href="/why" className="call_to-btn btn_white-border text-center">Обновить</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr/>
                <div className="container">

                <button type="button" className="btn btn-primary btn-lg rounded-circle" className="form-control">Перевод: "{this.state.word}"</button>
                </div>

                    <hr/>


                <div className="hero_btn-container text-center">
                    <a href="/admission" className="call_to-btn btn_white-border">
                        Вернуться к обучению
                    </a>
                </div>
                <hr/>
            </section>
            </div>
        )
    }
}