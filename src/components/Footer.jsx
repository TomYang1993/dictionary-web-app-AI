import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = ({ sourceUrls }) => {
    if (!sourceUrls || sourceUrls.length === 0) return null;

    return (
        <footer style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-line-grey)',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <p style={{ fontSize: '14px', color: 'var(--color-grey)', margin: 0, textDecoration: 'underline' }}>Source</p>
            <a
                href={sourceUrls[0]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    color: 'var(--text-color)',
                    fontSize: '14px'
                }}
            >
                {sourceUrls[0]}
                <ExternalLink size={12} color="var(--color-grey)" />
            </a>
        </footer>
    );
};

export default Footer;
