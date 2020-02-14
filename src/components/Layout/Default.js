import React from 'react';
import './default.css';

import Router from '../../router';

const Default = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="https://image.flaticon.com/icons/svg/2257/2257295.svg" alt="" />
                </div>
            </header>
            <main>
                <Router />
            </main>
            <footer className="footer">
                developer: Sasha Zayets
            </footer>
        </>
    )
}

export default Default;