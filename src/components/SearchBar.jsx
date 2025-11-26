import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, isInvalid, onClearError }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <input
                    type="text"
                    placeholder="Search for any word..."
                    value={term}
                    onChange={(e) => {
                        setTerm(e.target.value);
                        if (isInvalid && onClearError) onClearError();
                    }}
                    style={{
                        width: '100%',
                        padding: '20px 24px',
                        paddingRight: '60px', // Space for icon
                        backgroundColor: 'var(--input-bg)',
                        border: isInvalid ? '1px solid var(--color-red)' : '1px solid transparent',
                        borderRadius: '16px',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--text-color)',
                        fontFamily: 'inherit',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        position: 'absolute',
                        right: '24px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                >
                    <Search size={18} color="#A445ED" />
                </button>
            </div>
            {isInvalid && (
                <p style={{ color: 'var(--color-red)', marginTop: '8px', fontSize: '20px' }}>
                    Whoops, can't be empty...
                </p>
            )}
        </form>
    );
};

export default SearchBar;
