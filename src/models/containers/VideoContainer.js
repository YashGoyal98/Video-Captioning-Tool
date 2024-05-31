import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const VideoContainer = ({ videoUrl, vttUrl,onLoadedMetadata}) => (
    videoUrl && (
        <div>
            <VideoPlayer videoUrl={videoUrl} vttUrl={vttUrl} onLoadedMetadata={onLoadedMetadata}/>
        </div>
    )
);

export default VideoContainer;