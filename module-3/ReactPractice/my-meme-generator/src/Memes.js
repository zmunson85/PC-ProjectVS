import React, { useState, useEffect } from 'react';
import './App.css';
import { Meme } from './Meme';

const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return '?' + params.join('&');
};

function App() {
    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(result => setTemplates(result.data.memes));
    }, []);

    if (meme) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img style={{ width: '300px', height: '300px' }} src={meme} alt="My meme" />
            </div>
        );
    }

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            {template && (
                <>
                    <Meme template={template} />
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            const params = {
                                template_id: template.id,
                                username: 'VschoolTesting',
                                password: 'Testing1',
                                text0: topText,
                                text1: bottomText
                            };
                            // Add logic to create meme from api
                            const response = await fetch(
                                `https://api.imgflip.com/caption_image${objectToQueryParam(
                                    params
                                )}`,
                                {}
                            );
                            const json = await response.json();
                            setMeme(json.data.url);
                        }}
                    >
                        <input
                            placeholder="Top text"
                            value={topText}
                            onChange={e => setTopText(e.target.value)}
                        />
                        <input
                            placeholder="Bottom text"
                            value={bottomText}
                            onChange={e => setBottomText(e.target.value)}
                        />
                        <button type="submit">Create Meme</button>
                    </form>
                </>
            )}
            {!template && (
                <>
                    <h1>Pick a template</h1>
                    {templates.map(template => {
                        return (
                            <Meme
                                template={template}
                                onClick={() => {
                                    setTemplate(template);
                                }}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default App;