import React, { Component } from 'react'
import Button from '../Button'
import PutMaskOn from '../PutMaskOn'
import ReactStars from 'react-stars'
import SleepEnded from './SleepEnded'

class SleepStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'MASK'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ mode: 'START' });
        }, 4000);
    }

    render() {
        const { mode } = this.state;
        let modeComponent = <PutMaskOn />
        if (mode === 'START') {
            modeComponent = (
                <div className="sleep-start">
                    {this.props.children}
                    <Button onClick={() => this.setState({ mode: 'RATE' })}>Stop</Button>
                </div>
            )
        } else if (mode === 'RATE') {
            modeComponent = (
                <div className="sleep-start">
                    <h1>How do you feel?</h1>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            size={24}
                            onChange={() => this.setState({ mode: 'STATS' })}
                            color1={'#8d9fab'}
                            color2={'#86FFEA'}
                        />
                    </div>
                </div>
            )
        } else if (mode === 'STATS') {
            modeComponent = (
                <SleepEnded n={this.props.n}>
                    <Button onClick={this.props.onBack}>Back</Button>
                </SleepEnded>
            )
        }
        return (
            <div className="sleep-start-wrapper">
                {modeComponent}
            </div>
        )
    }
}

export default SleepStart;