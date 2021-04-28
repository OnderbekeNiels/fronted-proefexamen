import React from 'react';

function Settings(props: any) {
    return (
        <aside className="c-settings">
            <button onClick={() => { props.handleRefresh() }} className="o-button-reset c-settings__refresh">
                <p className="c-settings__label">
                    Get another quote
                </p>
                <svg className="c-settings__refresh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>
            </button>
            <div className="c-settings__colors">
                <p className="c-settings__label">change theme</p>
                <button onClick={() => props.handleColorSetting('black')} className="o-button-reset c-settings__color-button u-bg-color-settings--black" />
                <button onClick={() => props.handleColorSetting('green')} className="o-button-reset c-settings__color-button u-bg-color-settings--green" />
                <button onClick={() => props.handleColorSetting('orange')} className="o-button-reset c-settings__color-button u-bg-color-settings--orange" />
                <button onClick={() => props.handleColorSetting('red')} className="o-button-reset c-settings__color-button u-bg-color-settings--red" />
            </div>
        </aside>
    )
}

export default Settings;