import React from 'react';

export const Meme = ({ template, onClick }) => {
    return (
        <img
            key={template.id}
            src={template.url}
            alt={`${template.name} meme template`}
            style={{ maxHeight: '300px', maxWidth: '300px' }}
            onClick={onClick}
        />

    );
};