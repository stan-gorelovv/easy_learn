import React from "react";
import {Link} from "react-router-dom";


function Tr(props) {
    return <tr>
        <th scope="row">{props.index}</th>

        <td><Link to={"/category/"+props.id}>{props.class}</Link></td>
        <td>{props.wordru}</td>
        <td>{props.worden}</td>
        <td><img src={props.img}/></td>
        <td><span className='delete-word-btn' onClick={()=>{
            const formData=new FormData();
            formData.append('id', props.id);
            fetch("http://q9295615.beget.tech/php/getWord.php",{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    let words =props.parent.state.words;
                    words.splice(props.index-1, 1);
                    props.parent.setState({
                        words: words
                    })
                })
        }
        }>[Удалить]</span></td>
    </tr>
}

export class Study extends React.Component{
    constructor() {
        super();
        this.state = {
            words: []
        }
    }
    componentDidMount() {
        fetch("http://q9295615.beget.tech/php/getWord.php")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let rows = [];
                for (let i=0; i< result.length; i++) {
                    rows.push(<Tr
                        key={i}
                        index={i+1}
                        id={result[i].id}
                        class={result[i].class}
                        wordru={result[i].wordru}
                        worden={result[i].worden}
                        img={result[i].img}
                        parent={this}
                    />)

                }
                this.setState({
                    words: rows
                })

            })
    }

    render() {
        return (
            <section className="admission_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admission_detail-box">
                                <h3>
                                    Обучение
                                </h3>
                                <p>
                                    После выбора темы обучения, вам будет предложено к изучению
                                    слова из этой темы, его перевод, произношение, а также визуальное
                                    изображение изучаемого слова. После знакомства со словом,
                                    нажав кнопку "Слово выучено", вы можете исключить его из дальнейшего обучения,
                                    тем самым увеличив статистику изученных слов.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admission_img-container">
                                <img src="images/admission.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <table className="table">

                        <thead className="table">
                        <tr>
                            <th scope="col">№</th>

                            <th scope="col">Категория</th>
                            <th scope="col">Слово из категории</th>
                            <th scope="col">Перевод</th>
                            <th scope="col">Картинка</th>
                            <th scope="col">Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.words}
                        </tbody>
                    </table>


                    <div className="hero_btn-continer text-center">
                        <a href="/why" className="call_to-btn btn_white-border">
                            Перейти к тестированию
                        </a>
                    </div>
                </div>
                <hr/>

            </section>
        )
    }
}
