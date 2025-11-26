import React from 'react';
import { Play } from 'lucide-react';

const WordHeader = ({ word, phonetic, audio }) => {
    const playAudio = () => {
        if (audio) {
            const sound = new Audio(audio);
            sound.play();
        }
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h1>{word}</h1>
                <p style={{ color: 'var(--color-purple)', fontSize: '24px', margin: '8px 0 0 0' }}>{phonetic}</p>
            </div>
            {audio && (
                <button
                    onClick={playAudio}
                    style={{
                        width: '75px',
                        height: '75px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'var(--color-purple)' : 'rgba(164, 69, 237, 0.25)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'background-color 0.3s',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Play
                        size={32}
                        fill={isHovered ? '#FFFFFF' : '#A445ED'}
                        color={isHovered ? '#FFFFFF' : '#A445ED'}
                        style={{ marginLeft: '4px', transition: 'all 0.3s' }}
                    />
                </button>
            )}
        </div>
    );
};

export default WordHeader;
