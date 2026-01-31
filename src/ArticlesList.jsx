import { Component } from "react";
import styled from 'styled-components';

export class ArticlesList extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.getAPI()
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
        let newItem = {
            headline: headline,
            describtion: describtion,
            img: img
        }
        this.setState(prevState => ({
            list: [...prevState.list, newItem]
        }));
    }

    deleteItem = (headline) => {
        this.setState({
            list: this.state.list.filter(item => item.headline !== headline)
        })
    }

    render() {
        return (
            <div className="ArticlesList">

                <form onSubmit={this.addItem} action="">
                    <input placeholder="Name" name="name" type="text" />
                    <input placeholder="Describtion" name="describtion" type="text" />
                    <input placeholder="Image link" name="img" type="text" />
                    <button type="submit">Create new item</button>
                </form>

                <ul>
                {this.state.list.map(item => {
                    return <li>
                        <h2>{item.title}</h2>
                        <p>{item.article}</p>
                        <img src={item.img} alt={item.title} />
                        <h3>{item.rate}</h3>
                        <p>{item.date}</p>
                        {/* <button onClick={() => this.deleteItem(item.headline)}>Delete element</button> */}
                    </li>
                })}
                </ul>
            </div>
        )
    }
}