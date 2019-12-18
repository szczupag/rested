import React, {Component} from "react";

class Ad extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ad-wrapper">
                <img src={this.props.img}/>
                <p>sdasddads</p>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Ad;