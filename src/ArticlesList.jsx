import { Component } from "react";
import styled from 'styled-components';

export class ArticlesList extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.getAPI()
        const lcItems = JSON.parse(localStorage.getItem('Items'));
        this.setState({
        list: lcItems
        })

    }

    componentDidUpdate() {
        const items = this.state.list
        console.log(items)
        localStorage.setItem('Items', JSON.stringify(items))
    }

    getAPI = () => {
        fetch("https://69749e44265838bbea956cab.mockapi.io/articles").then((result) => result.json()).then((resultdata) => 
        this.setState(({
            list: resultdata
        }))
        )
    }

    addItem = (e) => {
        e.preventDefault();
        let headline = e.target.name.value;
        let describtion = e.target.describtion.value;
        let img = e.target.img.value;
        let rate = e.target.rate.value;
        let category = e.target.category.value;
        let date = e.target.date.value;
        let newItem = {
            title: headline,
            article: describtion,
            img: img,
            rate: rate,
            category: category,
            date: date
        }
        this.setState(prevState => ({
            list: [...prevState.list, newItem]
        }));
    }

    deleteItem = (title) => {
        this.setState({
            list: this.state.list.filter(item => item.title !== title)
        })
    }

    render() {
        return (
            <div className="ArticlesList">

                <form onSubmit={this.addItem} action="">
                    <input placeholder="Name" name="name" type="text" />
                    <input placeholder="Describtion" name="describtion" type="text" />
                    <input placeholder="Image link" name="img" type="text" />
                    <input placeholder="Rate" name="rate" type="text" />
                    <input placeholder="Category" name="category" type="text" />
                    <input placeholder="Date" name="date" type="text" />
                    <button type="submit">Create new item</button>
                </form>

                <ul>
                {this.state.list.map(item => {
                    return <li>
                        <h2>{item.title}</h2>
                        <p>{item.article}</p>
                        <img src={item.img} alt={item.title} />
                        <h3>Rate: {item.rate}</h3>
                        <p>Publish date: {item.date}</p>
                        <button onClick={() => this.deleteItem(item.title)}>Delete element</button>
                    </li>
                })}
                </ul>
            </div>
        )
    }
}

//  за допомогою методу componentDidUpdate реалізувати збереження списку завдань на клієнті використовуючи локальне сховище

// Таймер з componentDidMount та componentWillUnmount - створіть класовий компонент, який має таймер, що починає відлік
//  часу після монтажу компонента та зупиняється при видаленні компонента
//  з DOM. Використовуйте componentDidMount для запуску таймеру та componentWillUnmount для його зупинки.