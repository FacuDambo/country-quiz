import Image from 'next/image';
import React, { useEffect } from 'react'

const Flag = ({nextButton, correctOption, options, selectedOption, clickedItem, nextQuestion, handleClick, counter, setSelectedOption, handleNext, isSelected, setIsSelected}) => {
    useEffect(() => {
        setSelectedOption("")
        setIsSelected(false)
    }, [setSelectedOption, setIsSelected])

    return (
        <div className={`${nextButton ? 'expanded' : ''} optionsBox`}>
            <Image alt="flag" src={correctOption?.flags.svg} width={84} height={54} className='flagImg'></Image>
            <h4>Which country does this flag belong to?</h4>
            <div className='optionsContainer'>
                {options?.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((option, index) => (
                    <button 
                    className={`${correctOption?.name?.common === selectedOption && index === clickedItem ? 'correct' : selectedOption === "" ? "" : ''} ${isSelected ? 'disabled' : ''} optionButton ${index === clickedItem && correctOption?.name?.common !== selectedOption && selectedOption !== "" ? 'incorrect' : ''}`} 
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

export default Flag