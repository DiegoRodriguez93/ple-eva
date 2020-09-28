import React from 'react';

export function getComponent(path) {
    switch (path) {
        case '/':
            return 'step1';
        case '/step2':
            return 'step2';
        case '/result':
            return 'step2';
        default:
            return 'step1'
    }
}

export default function Header(props) {

    let { path } = props;
    console.log('props ' + getComponent(path));

    /*     const changeLanguage = (lng) => i18n.changeLanguage(lng); */

    return (
        <div className="App-header center-items">
            {/* <h2>{t("Welcome to React")}</h2> */}
            {/*         <button onClick={() => changeLanguage("de")}>de</button>
<button onClick={() => changeLanguage("en")}>en</button>
<button onClick={() => changeLanguage("es")}>es</button>
<button onClick={() => changeLanguage("fr")}>fr</button> */}

            <div className="step-container center-items">
                <span style={path === '/' ? {backgroundColor:'Black'} : {} } className="step">1</span>
                <hr className="step-hr" />
                <span style={path === '/step2' ? {backgroundColor:'Black'} : {} } className="step">2</span>
                <hr className="step-hr" />
                <span className="step">3</span>
            </div>

        </div>
    )

}