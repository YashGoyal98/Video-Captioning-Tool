import React from 'react';
import '../../css//VideoUrlInput.css'

const VideoUrlInput = ({ videoUrl, onUrlChange }) => (
    <div>
        <h2>Video URL</h2>
        <input
            type="text"
            value={videoUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            placeholder="Enter video URL"
        />
        <p><i>*To update the url first delete the whole url and then enter a new one</i></p>
    </div>
);

export default VideoUrlInput;