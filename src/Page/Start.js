import React, { Component } from 'react'
import Button from '../Button'
import PutMaskOn from '../PutMaskOn'
import ReactStars from 'react-stars'

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
        return (
            <div className="sleep-start-wrapper">
                {this.state.mode === 'MASK' && <PutMaskOn />}
                {this.state.mode === 'START' && (
                    <>
                        {this.props.children}
                        <Button onClick={() => this.setState({ mode: 'RATE' })}>Stop</Button>
                    </>
                )}
                {this.state.mode === 'RATE' && (
                    <>
                        <h1>How do you feel?</h1>
                        <div className="rating">
                            <ReactStars
                                count={5}
                                size={24}
                                onChange={this.props.onBack}
                                color1={'#8d9fab'}
                                color2={'#86FFEA'}
                            />
                        </div>
                    </>
                )}
            </div>
        )
    }
}

export default SleepStart;