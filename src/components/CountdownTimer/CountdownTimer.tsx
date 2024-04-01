import './Countdowntimer.css'

interface CountdownData {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    message: string;
  }

const CountdownTimer: React.FC<{countdownData : CountdownData}> = ({countdownData}) => {
  return (
   <>
   { !(countdownData.message.length > 0) ? (

    <div className='countdown-container'>
        <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Days</span>
        </div>
        <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Hours</span>
        </div>
        <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutes</span>
        </div>
        <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Seconds</span>
        </div>
    </div>

   ) :
    <div className='highlight'>{countdownData.message}</div>
   }
   </>
  )
}

export default CountdownTimer