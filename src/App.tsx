import { useCallback, useEffect, useState } from "react";
import { DisplayMediaHandler } from "./utils/DisplayMediaHandler";

export const App = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement>();
  const [displayMediaHandler] = useState<DisplayMediaHandler>(new DisplayMediaHandler());
  const callbackRefVideo = (node: HTMLVideoElement | null) => {
    if (node) setVideoElement(node);
  };

  const startShareScreen = useCallback(() => {
    if (!videoElement) return;
    
    displayMediaHandler.start().then((stream) => {
      videoElement.srcObject = stream as unknown as MediaProvider;
    });

  }, [
    videoElement,
    displayMediaHandler
  ]);

  return (
    <div className="App">
      <video
        ref={(node) => callbackRefVideo(node)}
        autoPlay
        width={1280}
        height={768}
        style={{
          width: '100%',
          backgroundColor: 'black'
        }}
      ></video>

      <button type="button" onClick={() => startShareScreen()}>Share Screen</button>
    </div>
  );
};
