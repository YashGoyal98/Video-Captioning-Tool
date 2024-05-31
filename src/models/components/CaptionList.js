import React from 'react';
import '../../css/CaptionList.css';
import {formatTimestamp} from "../../utility/utility";

const CaptionList = ({ captions, onDeleteCaption }) => {

    return (
        <div className="caption-list-container">
            <ul className="caption-list">
                {captions.map((caption, index) => (
                    <li key={index} className="caption-item">
                        <p>
                            {formatTimestamp(caption.startTimestamp)} - {formatTimestamp(caption.endTimestamp)}: {caption.text}
                        </p>
                        <button onClick={() => onDeleteCaption(caption.startTimestamp)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaptionList;