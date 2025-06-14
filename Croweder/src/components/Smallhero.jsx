import React, { useEffect, useState } from 'react';

const SmallHero = ({videoIndex}) => {
  const [latest, setStartups] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKENDURL}last5`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.startups) {
          setStartups(data.startups);
        }
      })
      .catch((error) => {
        console.error('Error fetching latest startups:', error);
        setError(error.message);
      });
  }, []);

  function getYouTubeEmbedUrl(url){
    console.log(url)
    if (!url) return '';
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`;
    }
    try {
      const match = url.match(/v=([a-zA-Z0-9_-]{11})/);
      console.log(match)
      const videoId = match ? match[1] : null;
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    } catch (e) {
      console.error('Error parsing YouTube URL:', e);
      return '';
    }
  };

  if (error) {
    return <div className="text-red-500 p-4">Error: {error}</div>;
  }

  if (!latest) {
    return <div className="p-4">Loading...</div>;
  }

  // Safely access the first startup's video URL
  const firstStartup = latest[videoIndex];
  const youtubeEmbedUrl = firstStartup?.intro_video ? getYouTubeEmbedUrl(firstStartup.intro_video) : '';
  
  if (!youtubeEmbedUrl) {
    return <div className="p-4">No video available</div>;
  }

  return (
    <div className='w-full h-full overflow-hidden'>
      <iframe
      style={{borderRadius:"1rem"}}
        width="100%"
        height="100%"
        src={youtubeEmbedUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SmallHero;