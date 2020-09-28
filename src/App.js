import React from "react";
import { useTranslation, Trans } from "react-i18next";
import './App.scss';

import description1 from './assets/img/description1.jpeg';
import description2 from './assets/img/description2.jpeg';

import Swal from 'sweetalert2';

export default function App() {
    const { t, i18n } = useTranslation();

    console.log('app ha sido re-renderizada')

    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    const handleNext = () => {
        Swal.fire({
            title: 'Terms and conditions',
            input: 'checkbox',
            html: '<div class="tosBox">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</div>',
            inputPlaceholder: 'I agree to terms and conditions',
            preConfirm: () => {
                if (document.getElementById('swal2-checkbox').checked) {
                    console.log('ok')
                } else {
                    Swal.showValidationMessage('You must agree the terms and conditions')
                }
            }
        }).then(function (result) {
            if (result.value) {
                // Swal.fire({icon: 'success', text: 'You have a bike!'});


            } else if (result.value === 0) {
                // Swal.fire({icon: 'error', text: "You don't have a bike :("});

            } else {
                console.log(`modal was dismissed by ${result.dismiss}`)
            }
        })
    }

    const index = 11;

    return (
        <div className="App">
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
            <div className="App-main">
                <div className="container">

                    <div className="App-main-title">
                        <h1>{t("Welcome to OpenClose")}</h1>
                        <hr className="title-hr" />
                    </div>

                </div>
                <div className="container">

                    <div className="App-main-description">

                        <div className="col">
                            <img src={description1} />
                            <div className="col-description">
                                {t("Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas")}
                            </div>
                        </div>
                        <div className="col">
                            <img src={description2} />
                            <div className="col-description">
                                {t("Crea tu clave maestra, solo tú podrás acceder a tus secretos con ella.")}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container container-info">
                    
                <div className="info" style={{width: "100"}}>
                            <div className="description-title"><h3>¿Cómo funciona?</h3></div>
                            <div className="description"><p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.</p></div>
                        </div>

                        <div className="info">
                            <div className="description-title"><h3>¿Qué datos puedes guardar?</h3></div>
                            <div className="description"><p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro.</p></div>
                        </div>

                </div>

            </div>

            <div className="App-footer">

                <div className="container container-footer">
                    <div className="left"></div>
                    <div className="right">
                        <button className="button-next" onClick={() => handleNext()}>Siguiente {'>'}</button></div>
                </div>

            </div>

        </div>
    );
}
