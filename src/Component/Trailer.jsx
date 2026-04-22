import React from 'react'

function Trailer(props) {
    const {key, type, name} = props.item
    let videosrc = `https://www.youtube.com/embed/${key}`
  
    // Don't render if there's no key
    if (!key) {
        return null;
    }

    // Get emoji based on video type
    const getVideoIcon = (videoType) => {
        switch(videoType) {
            case 'Trailer': return '🎬';
            case 'Teaser': return '👀';
            case 'Clip': return '🎞️';
            case 'Featurette': return '🎥';
            case 'Behind the Scenes': return '🎭';
            default: return '📹';
        }
    }

    return (
        <div style={{
            width: '100%',
            margin: '20px 0',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div style={{
                padding: '16px 24px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3 style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: '600',
                    margin: 0
                }}>
                    {getVideoIcon(type)} {name || type || 'Video'}
                </h3>
                <span style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'white',
                    textTransform: 'uppercase'
                }}>
                    {type}
                </span>
            </div>
            <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden'
            }}>
                <iframe 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                    src={videosrc} 
                    title={name || "YouTube video player"} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Trailer