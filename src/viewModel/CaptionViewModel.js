import { useState, useCallback, useEffect } from 'react';
import {formatTimestamp} from "../utility/utility";

const useCaptionViewModel = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [captions, setCaptions] = useState([]);
    const [vttUrl, setVttUrl] = useState('');

    const handleAddCaption = (newCaption) => {
        const newCaptions = [];
        let inserted = false;

        for (let caption of captions) {
            if (newCaption.endTimestamp <= caption.startTimestamp) {
                if (!inserted) {
                    newCaptions.push(newCaption);
                    inserted = true;
                }
                newCaptions.push(caption);
            } else if (newCaption.startTimestamp >= caption.endTimestamp) {
                newCaptions.push(caption);
            } else {
                if (newCaption.startTimestamp > caption.startTimestamp) {
                    newCaptions.push({
                        startTimestamp: caption.startTimestamp,
                        endTimestamp: newCaption.startTimestamp,
                        text: caption.text,
                    });
                }
                newCaptions.push(newCaption);
                if (newCaption.endTimestamp < caption.endTimestamp) {
                    newCaptions.push({
                        startTimestamp: newCaption.endTimestamp,
                        endTimestamp: caption.endTimestamp,
                        text: caption.text,
                    });
                }
                inserted = true;
            }
        }

        if (!inserted) {
            newCaptions.push(newCaption);
        }

        setCaptions(newCaptions);
    };

    const handleDeleteCaption = (index) => {

        const newCaptions = captions.filter((_)=>_.startTimestamp!==index);
        setCaptions(newCaptions);
    };

    const updateVttFile = useCallback(() => {
        const vttContent = `WEBVTT\n\n${captions.map((caption, index) => {
            const start = formatTimestamp(caption.startTimestamp);
            const end = formatTimestamp(caption.endTimestamp);
            return `${index + 1}\n${start} --> ${end}\n${caption.text}\n\n`;
        }).join('')}`;

        const blob = new Blob([vttContent], { type: 'text/vtt' });
        const url = URL.createObjectURL(blob);
        setVttUrl(url);
    }, [captions]);

    useEffect(() => {
        updateVttFile();
    }, [captions, updateVttFile]);

    const handleVideoUrlChange = (url) => {
        setVideoUrl(url);
        setCaptions([]); // Reset captions when URL changes
        setVttUrl('');
    };

    return {

        videoUrl,
        captions,
        vttUrl,
        handleAddCaption,
        handleDeleteCaption,
        handleVideoUrlChange,
    };
};

export default useCaptionViewModel;