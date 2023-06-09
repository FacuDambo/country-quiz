import Image from 'next/image'
import React from 'react'

const Fail = ({correctNumber, setIsFlagOrCapital, setSelectedOption, setNextButton, setIsSelected, setCorrectNumber}) => {
    return (
        <div className={`failBox`}>
            <Image src={'/fail.svg'} className='failImg' alt='fail image' width={238} height={128.58}></Image>
            <h4>Results</h4>
            <p>You got <span className='correctNumber'>{correctNumber}</span> correct answer{correctNumber === 1 ? '' : 's'}</p>
            <button className='tryAgain' onClick={() => { setIsFlagOrCapital(true); setSelectedOption(""); setNextButton(false); setIsSelected(false); setCorrectNumber(0)}}>Try again</button>
        </div>
    )
}

export default Fail