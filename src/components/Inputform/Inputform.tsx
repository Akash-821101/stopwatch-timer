import { useState, FormEvent } from 'react';
import './Inputform.css'

interface InputformProps {
  onDateSelect: (date: number) => void;
  onCancel: () => void;
  isCountDownActive: boolean;
}

const Inputform: React.FC<InputformProps> = ({onDateSelect, onCancel, isCountDownActive}) => {
    const [date, setDate] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onDateSelect(new Date(date).getTime());
    }

    const handleClick = () => {
      onDateSelect(new Date(date).getTime());
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
        <button type='submit' className='button' onClick={handleClick}>Start Timer</button>
    ) :
    (
        <button type='button' className='button' onClick={onCancel}>Cancel Timer</button>
    )
  }
   </>
  )
}

export default Inputform