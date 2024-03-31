import { useState } from 'react';
import './Inputform.css'

const Inputform = ({onDateSelect, onCancel, isCountDownActive}) => {
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onDateSelect(date);
    }
  return (
   <>
   <form onSubmit={handleSubmit} className='form-container'>
    <input type="datetime-local" 
    value={date}
    onChange={(e: React.FormEvent<HTMLInputElement>) => setDate(e.currentTarget.value)}
    className='input-field'
    required
    />
   </form>
  {
    !isCountDownActive ? 
    (
        <button type='submit' className='button' onClick={() => onDateSelect(date)}>Start Timer</button>
    ) :
    (
        <button type='button' className='button' onClick={onCancel}>Cancel Timer</button>
    )
  }
   </>
  )
}

export default Inputform