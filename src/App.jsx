import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "pexels";
import ReactPlayer from 'react-player';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient(
      "LHY4Mb2fQlnGvMC4gUgpIEj2jcvU3CddTqGGeixcYPF5FbfQ06aSKvDU"
    );
    console.log(client, "client");
    const query = "Nature";
    client.videos.search({ query, per_page: 4 }).then((videos) => {
      console.log(videos,"vids")
      setData(videos.videos);
    });
  }, []);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleCardClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className="main-container">
        <header>
          <h1>Video Streaming App</h1>
        </header>
        <div className="vid-page">
        {data.map((vi) => {
          console.log(vi.video_files[1].link); // Log vi object to the console
          return (
            <>
            <div
            className={`video-card ${isFullScreen ? 'full-screen' : ''}`}
            onClick={handleCardClick}
          >
            <ReactPlayer
              url={vi.video_files[1].link}
              width="100%"
              height="100%"
              playing={isFullScreen}
              controls={!isFullScreen} // Show controls only when not in fullscreen
              />
              </div>      
              </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default App;
