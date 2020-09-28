import React from 'react';
import { useTranslation } from "react-i18next";

import description1 from './img/description1.jpeg';
import description2 from './img/description2.jpeg';

export default function Step1() {

    const { t } = useTranslation();

    return (<>

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

            <div className="info" style={{ width: "100" }}>
                <div className="description-title"><h3>¿Cómo funciona?</h3></div>
                <div className="description"><p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.</p></div>
            </div>

            <div className="info">
                <div className="description-title"><h3>¿Qué datos puedes guardar?</h3></div>
                <div className="description"><p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro.</p></div>
            </div>

        </div>

    </>)

}