import React, { Component } from "react";
import ClockUI from "./ClockUI";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render = () => {
        const { date } = this.state;
        return (
            <ClockUI date={date} />
        );
    }
    
    componentDidMount = () => {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            });
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }

}

export default Clock;