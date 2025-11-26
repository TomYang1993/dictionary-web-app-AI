import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WordHeader from './components/WordHeader';
import Meaning from './components/Meaning';
import Footer from './components/Footer';
import { getWordDefinition } from './services/dictionaryApi';

function App() {
    const [font, setFont] = useState('font-sans');
    const [theme, setTheme] = useState('light');
    const [wordData, setWordData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Theme effect
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Font effect
    useEffect(() => {
        document.body.classList.remove('font-sans', 'font-serif', 'font-mono');
        document.body.classList.add(font);
    }, [font]);

    const handleSearch = async (word) => {
        setLoading(true);
        setError(null);
        setWordData(null); // Clear previous data

        if (!word.trim()) {
            setError({ type: 'EMPTY', message: "Whoops, can't be empty..." });
            setLoading(false);
            return;
        }

        try {
            const data = await getWordDefinition(word);
            setWordData(data[0]);
        } catch (err) {
            console.error(err);
            setError({ type: 'API', message: err.message });
            setWordData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <Header
                font={font}
                setFont={setFont}
                theme={theme}
                setTheme={setTheme}
            />

            <SearchBar
                onSearch={handleSearch}
                isInvalid={error?.type === 'EMPTY'}
                onClearError={() => setError(null)}
            />

            {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}

            {!wordData && !loading && !error && (
                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <span style={{ fontSize: '64px' }}>😊</span>
                    <h3 style={{ marginTop: '20px', color: 'var(--text-color)' }}>Welcome to your dictionary</h3>
                    <p style={{ color: 'var(--color-grey)' }}>Type a word above to get started!</p>
                </div>
            )}

            {error?.type === 'API' && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <span style={{ fontSize: '64px' }}>😕</span>
                    <h3>No Definitions Found</h3>
                    <p>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
                </div>
            )}

            {wordData && !loading && !error && (
                <main>
                    <WordHeader
                        word={wordData.word}
                        phonetic={wordData.phonetic || (wordData.phonetics.find(p => p.text)?.text)}
                        audio={wordData.phonetics.find(p => p.audio && p.audio !== '')?.audio}
                    />

                    {wordData.meanings.map((meaning, index) => (
                        <Meaning
                            key={index}
                            partOfSpeech={meaning.partOfSpeech}
                            definitions={meaning.definitions}
                            synonyms={meaning.synonyms}
                        />
                    ))}

                    <Footer sourceUrls={wordData.sourceUrls} />
                </main>
            )}
        </div>
    );
}

export default App;
