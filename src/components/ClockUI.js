import React, { Component } from "react";

import "../styles/clock.css";

class ClockUI extends Component {

    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    constructor(props) {
        super(props);
    }

    render = () => {
        const { date } = this.props;
        return (
            <div className="container">
                <div className="day">{this.days[date.getDay()]}</div>
                <div className="center">
                    <div className="flexContainer">
                        <div className="digit">
                            {date.getHours() <= 12 ? this.formateTime(date.getHours()) : this.formateTime(date.getHours() % 12)}
                        </div>
                        <div className="digit">
                            {this.formateTime(date.getMinutes())}
                        </div>
                        <div className="digit">
                            {date.getSeconds().toString().padStart(2, "0")}
                        </div>
                        <div className="period"> {date.getHours() <= 12 ? 'AM' : 'PM'} </div>
                    </div>
                </div>
                <h1 className="date"> {this.months[date.getMonth()]}, {this.formateTime(date.getDate())} {date.getFullYear()} </h1>
            </div>
        );
    }

    formateTime = (value) => {
        return value.toString().padStart(2, "0");
    }

}

export default ClockUI;