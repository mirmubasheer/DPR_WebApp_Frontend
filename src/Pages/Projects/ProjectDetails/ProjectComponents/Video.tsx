import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';
import { Project } from '../../ProjectInterface';

// Wave animation for the play button
const waveAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

interface VideoProps {
  projectData: Project;
}

const Video: React.FC<VideoProps> = ({ projectData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube short link to an embed format
  const getEmbedLink = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|user\/(?:[^\s/]+)\/|(?:[^#&?]*)))((\w|-){11})(?:\S+)?/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1` : url;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
      {/* Video Card */}
      <Card 
        sx={{ 
          width: '100%', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
          borderRadius: '12px', 
          overflow: 'hidden',
          backgroundColor: '#f9f9f9',
        }}
      >
        <CardContent sx={{ padding: '16px 24px', textAlign: 'center' }}>
          {/* Heading */}
          <Typography 
            variant="body2" 
            component="h2" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#333' }}
          >
            Video
          </Typography>

          {/* Play or Close Button */}
          {!isPlaying ? (
            <Box 
              onClick={handlePlayPause} 
              sx={{ 
                position: 'relative', 
                display: 'inline-block', 
                cursor: 'pointer',
                animation: `${waveAnimation} 1.5s infinite`, 
              }}
            >
              <PlayCircleIcon 
                sx={{ 
                  fontSize: '100px', 
                  color: '#1976d2', 
                  zIndex: 1
                }} 
              />
            </Box>
          ) : (
            <Box 
              onClick={handlePlayPause} 
              sx={{ 
                position: 'relative', 
                display: 'inline-block', 
                cursor: 'pointer',
              }}
            >
              <CloseIcon 
                sx={{ 
                  fontSize: '40px', 
                  color: '#1976d2', 
                  zIndex: 1,
                  right: 0,
                }} 
              />
            </Box>
          )}

          {/* Embedded YouTube Video */}
          {isPlaying && (
            <Box sx={{ position: 'relative', paddingTop: '56.25%', marginTop: '20px' }}>
              <iframe 
                width="560" 
                height="315" 
                src={getEmbedLink(projectData.videoLink)} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                }}
              />
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Video;
