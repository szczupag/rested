import React from 'react'
import PageWrapper from './PageWrapper'
import CircularSlider from '@fseehawer/react-circular-slider';

const sleepDuration = () => {
    let arr = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            if (j < 2) {
                arr.push(`${i}:0${j*5}h`)
            } else {
                arr.push(`${i}:${j*5}h`)
            }
        }
    }
    return arr
};

const Sleep = () => (
    <PageWrapper>
        <div className="slider-wrapper">
            <CircularSlider
                onChange={ value => { console.log(value) } }
                knobColor="#86FFEA"
                progressSize={12}
                trackColor="#171f2a"
                progressColorFrom="#00847b"
                progressColorTo="#a2fff0"
                progressLineCap="round"
                data={sleepDuration()}
                label="SLEEP"
                labelColor="ffffff"
            />
        </div>
    </PageWrapper>


)

export default Sleep