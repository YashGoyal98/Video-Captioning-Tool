import React, { useState } from 'react';
import VideoUrlInput from './models/components/VideoUrlInput';
import CaptionContainer from './models/containers/CaptionContainer';
import useCaptionViewModel from './viewModel/CaptionViewModel';
import VideoContainer from "./models/containers/VideoContainer";

function App() {
  const [videoDuration, setVideoDuration] = useState(0);
  const {
    videoUrl,
    captions,
    vttUrl,
    handleAddCaption,
    handleDeleteCaption,
    handleVideoUrlChange,
  } = useCaptionViewModel();

  const handleLoadedMetadata = (duration) => {
    setVideoDuration(duration);
  };

  return (
      <div>
        <h1>Video Captioning Tool</h1>
        <VideoUrlInput videoUrl={videoUrl} onUrlChange={handleVideoUrlChange} />
        <VideoContainer videoUrl={videoUrl} vttUrl={vttUrl} onLoadedMetadata={handleLoadedMetadata} />
        <CaptionContainer
            captions={captions}
            onAddCaption={handleAddCaption}
            onDeleteCaption={handleDeleteCaption}
            vttUrl={vttUrl}
            maxDuration={videoDuration}
            disabled={!videoUrl}
        />
      </div>
  );
}

export default App;