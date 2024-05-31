import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, vttUrl, onLoadedMetadata }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video && vttUrl) {
            // Remove existing tracks
            const existingTracks = video.querySelectorAll('track');
            existingTracks.forEach((track) => video.removeChild(track));

            // Create a new track element
            const track = document.createElement('track');
            track.kind = 'captions';
            track.label = 'English';
            track.srclang = 'en';
            track.src = vttUrl;
            track.default = true;
            video.appendChild(track);
        }
        if (videoRef.current) {
            videoRef.current.addEventListener('loadedmetadata', () => {
                if (onLoadedMetadata) {
                    onLoadedMetadata(videoRef.current.duration);
                }
            });
        }
    }, [videoUrl,vttUrl,onLoadedMetadata]);

    return (
        <div>
            <video ref={videoRef} controls width="600">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;