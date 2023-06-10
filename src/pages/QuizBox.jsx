import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Capital from './Capital'
import Flag from './Flag'
import Fail from './Fail'

const QuizBox = ({countries}) => {
    const [options, setOptions] = useState([])
    const [correctOption, setCorrectOption] = useState({})
    const [selectedOption, setSelectedOption] = useState('')
    const [clickedItem, setClickedItem] = useState(null);
    const [correctNumber, setCorrectNumber] = useState(0);
    const [nextButton, setNextButton] = useState(false);
    const [nextQuestion, setNextQuestion] = useState(false)
    const [isFlagOrCapital, setIsFlagOrCapital] = useState(true)
    const [isSelected, setIsSelected] = useState(false)
    const [counter, setCounter] = useState(3);

    function extractUniqueElements(array) {
        const uniqueElements = [];
        const usedIndexes = [];

        while (uniqueElements.length < 4 && uniqueElements.length < array.length) {
            const index = Math.floor(Math.random() * array.length);
        
            if (!usedIndexes.includes(index)) {
                uniqueElements.push(array[index]);
                usedIndexes.push(index);
            }
        }
        return uniqueElements;
    }

    function randomNumber() {
        return Math.floor(Math.random() * 4);
    }

    useEffect(() => {
        let optArray = extractUniqueElements(countries)
        setOptions(optArray)
        console.log(correctNumber);
    }, [countries, isFlagOrCapital])

    useEffect(() => {
        setCorrectOption(options[randomNumber()])
    }, [options])

    useEffect(() => {
        if (nextQuestion) {
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter, nextQuestion]);

    function handleClick(e) {
        e.stopPropagation()
        setSelectedOption(e.target.lastChild.innerText)
        let selectedTag = e ? parseInt(e.target.id, 10) : null;
        setClickedItem(selectedTag);
        setIsSelected(true)

        if (e.target.lastChild.innerText === correctOption?.name?.common) {
            setCorrectNumber(correctNumber + 1)
            setNextQuestion(true)
            setTimeout(() => {
                setIsFlagOrCapital(!isFlagOrCapital)
                setSelectedOption('')
                setNextQuestion(false)
                setCounter(3)
                setIsSelected(false)
            }, 3000);
        }

        if (e.target.lastChild.innerText !== correctOption?.name?.common) {
            setTimeout(() => {
                setNextButton(true)
            }, 300);

        }
    }

    function handleNext(e) {
        setIsFlagOrCapital(null)
    }


    return (
        <>
            <div className='questionBox'>
                <h1 className='boxTitle'>COUNTRY QUIZ</h1>
                {isFlagOrCapital !== null ? <Image src={'/main.svg'} alt='main image' className='mainImage' width={162} height={116}></Image> : null}

                {isFlagOrCapital === true ?
                    <Capital nextButton={nextButton} 
                            correctOption={correctOption} 
                            options={options} 
                            selectedOption={selectedOption} 
                            clickedItem={clickedItem} 
                            nextQuestion={nextQuestion}
                            handleClick={handleClick}
                            counter={counter}
                            handleNext={handleNext}
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}></Capital>

                : isFlagOrCapital === false ?
                    <Flag nextButton={nextButton} 
                            correctOption={correctOption} 
                            options={options} 
                            selectedOption={selectedOption} 
                            clickedItem={clickedItem} 
                            nextQuestion={nextQuestion}
                            handleClick={handleClick}
                            counter={counter}
                            setSelectedOption={setSelectedOption}
                            handleNext={handleNext}
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}></Flag>

                : isFlagOrCapital === null ?
                    <Fail correctNumber={correctNumber} 
                            setIsFlagOrCapital={setIsFlagOrCapital} 
                            setSelectedOption={setSelectedOption}
                            setNextButton={setNextButton}
                            setIsSelected={setIsSelected}
                            setCorrectNumber={setCorrectNumber}></Fail>
                : null
                } 
            </div>
        </>
    )
}

export default QuizBox