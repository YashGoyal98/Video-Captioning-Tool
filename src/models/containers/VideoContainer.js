import React from 'react';
import VideoPlayer from '../Components/VideoPlayer';

const VideoContainer = ({ videoUrl, vttUrl,onLoadedMetadata}) => (
    videoUrl && (
        <div>
            <VideoPlayer videoUrl={videoUrl} vttUrl={vttUrl} onLoadedMetadata={onLoadedMetadata}/>
        </div>
    )
);

export default VideoContainer;