import React, { useState, useEffect } from 'react';
import { Book, Moon, Sun, ChevronDown } from 'lucide-react';

const Header = ({ font, setFont, theme, setTheme }) => {
    const [isFontOpen, setIsFontOpen] = useState(false);

    const fonts = [
        { name: 'Sans Serif', value: 'font-sans' },
        { name: 'Serif', value: 'font-serif' },
        { name: 'Mono', value: 'font-mono' },
    ];

    const handleFontChange = (value) => {
        setFont(value);
        setIsFontOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Book size={32} color="#757575" strokeWidth={1.5} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
                {/* Font Selector */}
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setIsFontOpen(!isFontOpen)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            fontWeight: 600,
                            fontSize: '14px',
                            color: 'var(--text-color)'
                        }}
                    >
                        {fonts.find(f => f.value === font)?.name}
                        <ChevronDown size={16} color="#A445ED" />
                    </button>

                    {isFontOpen && (
                        <ul style={{
                            position: 'absolute',
                            top: '30px',
                            right: '0',
                            backgroundColor: 'var(--dropdown-bg)',
                            boxShadow: '0px 5px 30px var(--shadow-color)',
                            borderRadius: '16px',
                            padding: '24px',
                            width: '120px',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}>
                            {fonts.map((f) => (
                                <li key={f.value}>
                                    <button
                                        onClick={() => handleFontChange(f.value)}
                                        className={f.value}
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: 'var(--text-color)',
                                            width: '100%',
                                            textAlign: 'left'
                                        }}
                                    >
                                        {f.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--color-line-grey)' }}></div>

                {/* Theme Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <label style={{
                        position: 'relative',
                        display: 'inline-block',
                        width: '40px',
                        height: '20px',
                    }}>
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            style={{ opacity: 0, width: 0, height: 0 }}
                        />
                        <span style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: theme === 'dark' ? '#A445ED' : '#757575',
                            borderRadius: '10px',
                            transition: '.4s'
                        }}></span>
                        <span style={{
                            position: 'absolute',
                            content: '""',
                            height: '14px',
                            width: '14px',
                            left: theme === 'dark' ? '23px' : '3px',
                            bottom: '3px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            transition: '.4s'
                        }}></span>
                    </label>
                    <Moon size={22} color={theme === 'dark' ? '#A445ED' : '#757575'} />
                </div>
            </div>
        </header>
    );
};

export default Header;
