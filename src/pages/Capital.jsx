import React from 'react'

const Capital = ({nextButton, correctOption, options, selectedOption, clickedItem, nextQuestion, handleClick, counter, handleNext, isSelected}) => {
    return (
        <div className={`${nextButton ? 'expanded' : ''} optionsBox`}>
            <h4>{correctOption?.capital} is the capital of...</h4>
            <div className='optionsContainer'>
                {options?.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((option, index) => (
                    <button 
                    className={`${correctOption?.name?.common === selectedOption && index === clickedItem ? 'correct' : ''} ${isSelected ? 'disabled' : ''} optionButton ${index === clickedItem && correctOption?.name?.common !== selectedOption && selectedOption !== "" ? 'incorrect' : ''}`} 
                    key={index} 
                    id={index}
                    onClick={(e) => handleClick(e)}>
                        <i className={`${correctOption?.name?.common === selectedOption && index === clickedItem ? 'correct jello-horizontal' : ''} material-symbols-outlined`} >check_circle</i>
                        <i className={`material-symbols-outlined ${index === clickedItem && correctOption?.name?.common !== selectedOption && selectedOption !== "" ? 'incorrect shake-horizontal' : ''}`}>cancel</i>
                        <span>{index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : index === 3 ? 'D' : null}</span>
                        <p>{option.name.common}</p>
                    </button>
                ))}
            </div>
            <button className={`${nextButton ? 'appear' : ''} nextButton`} onClick={handleNext}>Next</button>
            {nextQuestion ? <p className='nextQuestionText'>Next question in {counter}...</p> : null}
        </div>
    )
}

export default Capital