import { Component } from "react";

export class Timer extends Component {
    state = {
        seconds: 0
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState =>({
                seconds: prevState.seconds + 1
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <p>{this.state.seconds}</p>
        )
    }
}