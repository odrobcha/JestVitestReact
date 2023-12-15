import React, {useState} from 'react';
import './App.css'

function App () {
    const [disabled, setDisabled] = useState(false);
    const[buttonColor,setButtonColor] = useState('red');
    const nextColor = buttonColor ==='red' ? "blue" : "red";
    return (
      <div>
          <button
            onClick={()=>{setButtonColor(nextColor)}}
            disabled={disabled}
            className={`${buttonColor} ${disabled? 'grey' : ""}` }>
              Change to {nextColor}

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
