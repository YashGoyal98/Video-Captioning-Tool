import React, { useState } from 'react';
import CustomTimestampInput from '../Containers/CustomTimestampInput';
import  '../../css/CaptionForm.css';


const MAX_CHAR_ALLOWED = 100;

const CaptionForm = ({ onAddCaption, disabled, maxDuration }) => {

    const [startTimestamp, setStartTimestamp] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    const [endTimestamp, setEndTimestamp] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    const [text, setText] = useState('');
    const [errorText,setErrorText] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const start = startTimestamp.hours * 3600*1000 + startTimestamp.minutes * 60*1000 + startTimestamp.seconds*1000 + startTimestamp.milliseconds;
        const end = endTimestamp.hours * 3600*1000 + endTimestamp.minutes * 60*1000 + endTimestamp.seconds*1000 + endTimestamp.milliseconds;
        if(text.length>MAX_CHAR_ALLOWED){
            setErrorText("Caption Text too long! Limit : 100 charachters");

        }
        else if (start >= 0 && end > start && end <= maxDuration*1000) {
            console.log(text.length);
            setErrorText("Added Caption!");
            onAddCaption({
                startTimestamp: start,
                endTimestamp: end,
                text,
            });
            setStartTimestamp({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
            setEndTimestamp({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

            setText('');
        }
        else{
            setErrorText("Invalid Time Entered!");
        }
    };

    return (
        <form onSubmit={handleSubmit} disabled={disabled}>
            <fieldset disabled={disabled}>
                <div>
                    <label>Start Time:</label>
                    <CustomTimestampInput value={startTimestamp} onChange={setStartTimestamp} />
                </div>
                <div>
                    <label>End Time:</label>
                    <CustomTimestampInput value={endTimestamp} onChange={setEndTimestamp} />
                </div>
                <div>
                    <label>Text:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>{!Object.is(errorText,null)? <p>{errorText}</p> : <p>  Please Enter Time and Caption</p>}</div>

                <button type="submit">Add Caption</button>
            </fieldset>
        </form>
    );
};

export default CaptionForm;