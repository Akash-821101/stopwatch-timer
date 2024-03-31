import { useEffect, useState } from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import Inputform from '../Inputform/Inputform'
import song from '../../assets/beep-sound-8333.mp3'
import './Homepage.css'

const Homepage = () => {
  const [isCountDownActive, setIsCountDownActive] = useState(false)
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: '',
  });

  const [intervalId, setIntervalId] = useState(null)

  const startCountdown = (targetDate) => {
    // clear any existing interval
    clearInterval(intervalId);
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate)
      if(target > now) {
        const distance = target - now;
        const days = Math.floor(distance/(1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log('minutes', minutes)


        if(days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
          setIsCountDownActive(true);
          setCountdownData({days, hours, minutes, seconds, message: ''})
    
          //localStorage.setItem('countdown', JSON.stringify(countdownData))

        } else {
          setIsCountDownActive(true)
          setCountdownData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: 'selected time is more than 100 days'
          })
        }
      } else {
        setIsCountDownActive(true);
        playSound();
        setCountdownData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          message:
            "🎉 The countdown is over! What's next on your adventure? 🎉",
        })
      }
    }, 1000)
    console.log('interval', interval)
    setIntervalId(interval)
  }

  useEffect(() => {
    // cleanup on component unmount
    return () => {
      console.log('unmount minutes- ' , countdownData.minutes)
      clearInterval(intervalId)
    }
  }, [intervalId])

  const playSound = () => {
    const audio = new Audio(song)
    audio.play();
  }

  const handleDateSelect = (date:string) => {
    console.log('start countdown')
    startCountdown(date)
  }

  const cancelTimer = () => {
    console.log('stop countdown', intervalId)
    clearInterval(intervalId);
    setIsCountDownActive(false);
    setCountdownData({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    })
  }
  return (
    <div className="app-container">
        <h1>Countdown <span className='highlight'>Timer</span></h1>
        <Inputform onCancel={cancelTimer} onDateSelect={handleDateSelect} isCountDownActive={isCountDownActive}/>
        <CountdownTimer countdownData={countdownData}/>

    </div>
  )
}

export default Homepage