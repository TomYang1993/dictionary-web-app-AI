import React from 'react';

const Meaning = ({ partOfSpeech, definitions, synonyms }) => {
    return (
        <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <h2 style={{ fontStyle: 'italic' }}>{partOfSpeech}</h2>
                <div style={{ height: '1px', backgroundColor: 'var(--color-line-grey)', flexGrow: 1 }}></div>
            </div>

            <h3 style={{ marginBottom: '25px' }}>Meaning</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '13px', marginBottom: '40px' }}>
                {definitions.map((def, index) => (
                    <li key={index} style={{ display: 'flex', gap: '20px' }}>
                        <div style={{
                            minWidth: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-purple)',
                            marginTop: '10px'
                        }}></div>
                        <div>
                            <p style={{ margin: 0 }}>{def.definition}</p>
                            {def.example && (
                                <p style={{ color: 'var(--color-grey)', marginTop: '13px' }}>"{def.example}"</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {synonyms && synonyms.length > 0 && (
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>Synonyms</h3>
                    <p style={{ margin: 0, color: 'var(--color-purple)', fontWeight: 700 }}>
                        {synonyms.join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Meaning;
