import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '<lpws>/styles/Home.module.css'
import QuizBox from './QuizBox'
import { useState, useEffect } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [countries, setCountries] = useState([])
  
  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital')
      .then(res => setCountries(res.data))
  }

  useEffect(() => {
    getCountries()
  }, [])


  return (
    <>
      <Head>
        <title>Country Quiz</title>
        <meta name="description" content="Country Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <QuizBox countries={countries}></QuizBox>
        <p className='thanks'>Thanks to <a target='_blank' href='https://devchallenges.io/'>DevChallenges</a> for the design and inspiration for this project!</p>
      </main>
    </>
  )
}
