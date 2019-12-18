import React, { Component } from 'react'
import Button from '../Button'
import mask from '../assets/mask.svg'

class SleepStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hidden: false });
        }, 4000);
    }

    render() {
        return (
            <div className="sleep-start-wrapper">
                {this.state.hidden
                    ? (
                        <>
                            <div className="sleep-start-content">
                                <img src={mask} class="sleeping-mask-icon"/>
                                <h1>Put your Rested Eye Mask on</h1>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <h1>Sleep well</h1>
                            <Button onClick={this.props.onBack}>Stop</Button>
                        </>

                    )}
            </div>
        )
    }
}

export default SleepStart;