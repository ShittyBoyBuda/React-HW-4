import React, { useState, useEffect } from 'react';

function WindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.title = `${windowSize.width} x ${windowSize.height}`;

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowSize]);

    return (
        <div className='window'>
            <h1>Размер окна👇</h1>
            <p>Window width: {windowSize.width}</p>
            <p>Window height: {windowSize.height}</p>
        </div>
    );
}

export default WindowSize;
