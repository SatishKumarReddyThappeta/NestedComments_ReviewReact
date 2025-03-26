import '../App.css';
import { useState } from 'react';
const InputText = ({handleInputext}) => {

    const [inputText, setInputText] = useState('');
    const handleInput =(e)=>{
        handleInputext(inputText);
        setInputText('');
    }

  return (
    <div className="inputContainer">
        <input type="text" value={inputText} placeholder='Add comment...' onChange={(e)=> setInputText(e.target.value.trim())} className='inputBox'/>
        <button onClick={handleInput} className='addBtn'>Add</button>
    </div>
  )
}

export default InputText