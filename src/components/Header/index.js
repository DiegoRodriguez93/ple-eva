import React from 'react';

export default function Header() {

/*     const changeLanguage = (lng) => i18n.changeLanguage(lng); */

    return (
        <div className="App-header center-items">
            {/* <h2>{t("Welcome to React")}</h2> */}
            {/*         <button onClick={() => changeLanguage("de")}>de</button>
<button onClick={() => changeLanguage("en")}>en</button>
<button onClick={() => changeLanguage("es")}>es</button>
<button onClick={() => changeLanguage("fr")}>fr</button> */}

            <div className="step-container center-items">
                <span className="step">1</span>
                <hr className="step-hr" />
                <span className="step">2</span>
                <hr className="step-hr" />
                <span className="step">3</span>
            </div>

        </div>
    )

}