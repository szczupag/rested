import React, { Component } from 'react'
import moment from 'moment'
import nap from '../assets/nap.svg'
import Sleeping from '../Sleeping'
import Start from './SleepStart'

class Nap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: moment(),
            to: moment().add(15, 'minutes'),
            napStart: false,
        }
    }

    durationDecrease = () => {
        if (this.state.to > this.state.from) {
            this.setState(prevState => ({ to: prevState.to.subtract(15, 'minutes') }))
        }
    }

    durationIncrease = () => {
        this.setState(prevState => ({ to: prevState.to.add(15, 'minutes') }))
    }

    getDuration = () => {
        const duration = this.state.to - this.state.from
        const minutes = Math.floor((duration / 1000 / 60) % 60)
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
        if (hours == 0) {
            return `${minutes}m`
        }
        return `${hours}h ${minutes}m`
    }

    render() {
        if (!this.state.napStart) {
            return (
                <>
                    <h2>Set nap duration</h2>
                    <div className="nap-controls-wrapper">
                        <button onClick={this.durationDecrease}>-</button>
                        <p className="nap-duration">{this.getDuration()}</p>
                        <button onClick={this.durationIncrease}>+</button>
                    </div>
                    <div className="nap-start-wrapper">
                        <p>Tap</p>
                        <img src={nap} onClick={() => this.setState({ napStart: true })} />
                        <p>to nap</p>
                    </div>
                </>
            )
        }
        return (
            <Start
                n={1}
                onBack={() => this.setState({ napStart: false })}
            >
                <Sleeping>
                    <p className="wake-up-time">Napping</p>
                </Sleeping>
            </Start>
        )
    }

}

export default Nap