import React from 'react'
import PageWrapper from './PageWrapper'
import {Line} from 'rc-progress';
import plan1 from '../assets/plan1_1.svg'
import plan2 from '../assets/plan2_2.svg'
import plan3 from '../assets/plan3.svg'
import SleepEnded from "./SleepEnded";

const data = [{
    title: "Sleepyhead",
    description: "Sleep for a total of 210 hours this month",
    current_progress: 45,
    goal: 210,
    img: plan1
}, {
    title: "Early bird",
    description: "Wake up before 6.30 am 5 times this week",
    current_progress: 3,
    goal: 5,
    img: plan2
}, {
    title: "Nap time",
    description: "Take 5 naps this week",
    current_progress: 5,
    goal: 5,
    img: plan3
}]

const Plan = () => (
    <>
        <h1>Your goals</h1>
        {
            data.map((d) =>
                <div className="goal-tile-wrapper">
                    <h1>{d.title}</h1>
                    <h2>{d.current_progress}/{d.goal}</h2>
                    <p>{d.description}</p>
                    <img src={d.img} className="tile-icon"/>
                    <div className="goal-progressbar-wrapper">
                        <Line percent={d.current_progress / d.goal * 100} strokeWidth="1" strokeColor="#86FFEA"/>
                    </div>
                </div>
            )
        }
        <SleepEnded n={1}/>
    </>
)

export default Plan