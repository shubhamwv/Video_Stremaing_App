import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "pexels";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient(
      "LHY4Mb2fQlnGvMC4gUgpIEj2jcvU3CddTqGGeixcYPF5FbfQ06aSKvDU"
    );
    console.log(client, "client");
    const query = "Nature";
    // Corrected method: client.video.search
    client.videos.search({ query, per_page: 8 }).then((videos) => {
      console.log(videos,"vids")
      setData(videos.videos);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <header>
          <h1>Video Streaming App</h1>
        </header>
        <div className="vid-page">
          {data.map((e) => {
            return (
              <>
                  <div className="vid-card">
                    <div className="vid-image">
                    <img src={e.image} alt="Description of the image" />
                    </div>
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
