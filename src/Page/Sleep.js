import React, { Component } from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';
import Button from '../Button'
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment'
import Start from './SleepStart'
import Sleeping from '../Sleeping'

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const sleepDuration = () => {
    let arr = [];
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            if (j < 2) {
                arr.push(`${i}h:0${j * 5}m`)
            } else {
                arr.push(`${i}h:${j * 5}m`)
            }
        }
    }
    return arr
};

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const wrapperStyle = { width: "100%", margin: 0 };

class Sleep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: moment().format('h:mm a'),
            to: moment().format('h:mm a'),
            startSleep: false,
        }
    }

    changeTime = (change) => {
        this.setState({
            to: moment(this.state.from, 'h:mm a')
                .add(change[0], 'hours')
                .add(change[1], 'minutes')
                .format('h:mm a')
        });
    };



    render() {
        if (!this.state.sleepStart) {
            return (
                <>
                    <h2>Set sleep hours</h2>
                    <div className="time-wrapper">
                        {`${this.state.from} - ${this.state.to}`}
                    </div>
                    <div className="slider-wrapper">
                        <CircularSlider
                            onChange={value => {
                                this.changeTime(value.replace('h', '').replace('m', '').split(':'))
                            }}
                            knobColor="#86FFEA"
                            progressSize={20}
                            trackColor="#171f2a"
                            progressColorFrom="#00847b"
                            progressColorTo="#a2fff0"
                            progressLineCap="round"
                            valueFontSize="32px"
                            data={sleepDuration()}
                            label="Sleep"
                            labelColor="ffffff"
                        />
                    </div>
                    <h2>Wake up shift</h2>
                    <div className="horizontal-slider-wrapper">
                        <div style={wrapperStyle}>
                            <Slider
                                min={0}
                                max={30}
                                defaultValue={15}
                                handle={handle}
                                railStyle={{ backgroundColor: '#417473' }}
                                trackStyle={{ backgroundColor: '#86FFEA' }}
                                dotStyle={{ backgroundColor: '#00847b' }}
                            />
                        </div>
                    </div>
                    <Button onClick={() => this.setState({ sleepStart: true })}>Sleep</Button>
                </>
            )
        }
        return (
            <Start
                n={0}
                onBack={() => this.setState({ sleepStart: false })}
            >
                <h1>Estimated Wake Up Time</h1>
                <Sleeping>
                    <p className="wake-up-time">{this.state.to}</p>
                </Sleeping>
            </Start>
        );
    }
}

export default Sleep