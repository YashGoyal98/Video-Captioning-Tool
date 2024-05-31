import React from 'react';
import CaptionForm from '../components/CaptionForm';
import CaptionList from '../components/CaptionList';

const CaptionContainer = ({ captions, onAddCaption, onDeleteCaption, vttUrl ,disabled,maxDuration}) => (
    <div>
        <h2>Add Caption</h2>
        <CaptionForm onAddCaption={onAddCaption} disabled={disabled} maxDuration={maxDuration}/>
        <h2>Captions</h2>
        <CaptionList captions={captions} onDeleteCaption={onDeleteCaption} />
        {vttUrl && (
            <a href={vttUrl} download="captions.vtt">
                Download Captions
            </a>
        )}
    </div>
);

export default CaptionContainer;