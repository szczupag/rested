import React, { useState } from 'react'
import PageWrapper from './PageWrapper'
import Select from 'react-select'

const options = [
    { value: 'today', label: 'Today' },
    { value: 'thisWeek', label: 'This Week' },
    { value: 'thisMonth', label: 'This Month' },
    { value: 'lastMonth', label: 'Last Month' },
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#8d9fab',
        backgroundColor: state.isSelected ? '#1d3a4f' : '#1d3f57',
        padding: 20,
    }),
    container: (provided) => ({
        ...provided,
        width: '200px',
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#1d3f57',
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#171f2a',
        border: 'transparent',
        color: "#fff !important",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#fff !important"
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition, color: "#fff" };
    }
}

const Report = () => {
    const [selectedOption, setSelectedOption] = useState(options[0])
    return (
        <PageWrapper>
            <div className="select-wrapper">
                <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={false}
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            neutral50: '#fff !important',
                            primary: '#fff',
                        },
                    })}
                />
            </div>
        </PageWrapper>
    )
}

export default Report