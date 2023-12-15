import React, {useState} from 'react';
import './App.css';
import {kebabCaseToTitleCase} from './helpers'

function App () {
    const [disabled, setDisabled] = useState(false);
    const[buttonColor,setButtonColor] = useState('medium-violet-red');
    const nextColor = buttonColor ==='medium-violet-red' ? "midnight-blue" : "medium-violet-red";
    const nextColorText = buttonColor ==='medium-violet-red' ? kebabCaseToTitleCase("midnight-blue") : kebabCaseToTitleCase("medium-violet-red");


    return (
      <div>
          <button
            onClick={()=>{setButtonColor(nextColor)}}
            disabled={disabled}
            className={`${buttonColor} ${disabled? 'grey' : ""}` }>
              Change to {nextColorText}
          </button>

          <br />
          <input
            type="checkbox"
            id="disable-button-checkbox"
            defaultChecked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />

          <label htmlFor="disable-button-checkbox">Disable button</label>

      </div>
    );
}

export default App;
