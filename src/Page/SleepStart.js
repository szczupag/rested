import React, { Component } from 'react'
import Button from '../Button'
import Sleeping from '../Sleeping'
import PutMaskOn from '../PutMaskOn'

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
                        <PutMaskOn />
                    )
                    : (
                        <>
                            <h1>Estimated Wake Up Time</h1>
                            <Sleeping>
                                <p className="wake-up-time">{this.props.wakeUpTime}</p>
                            </Sleeping>
                            <Button onClick={this.props.onBack}>Stop</Button>
                        </>

                    )}
            </div>
        )
    }
}

export default SleepStart;