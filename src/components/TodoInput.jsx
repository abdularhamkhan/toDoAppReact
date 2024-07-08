import React, { useState } from 'react'


function TodoInput(props) {

    const [inputText, setInputText] = useState("");
    const handleEnterpress = (event) => {
        if (event.key == "Enter") {
            props.addTasks(inputText);
            setInputText("");
        }
    }

    return (
        <div className="input-container">
            <input type="text" className='input-box-todo' placeholder='Enter your tasks...' onChange={(event) => { setInputText(event.target.value); } } value={inputText} onKeyDown={handleEnterpress}/>
            <button className='add-btn'
                onClick={
                    () => {
                        props.addTasks(inputText);
                        setInputText("");
                    }
                }>
                +
            </button>
        </div>
    )
}

export default TodoInput 