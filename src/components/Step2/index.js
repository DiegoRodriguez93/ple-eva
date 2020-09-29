import React from 'react';
import { useForm } from "react-hook-form";


export default function Step2() {
    
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (<>

        <div className="container section-info">

            <div className="info">
                <div className="col-description"><p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.</p></div>
            </div>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row info">
                <div className="col-lg-6 sm-12">
                    <label>Crea tu contraseña maestra</label>
                    <input 
                    type="password"
                    name="password"
                    className="input-master-password"
                    placeholder="Tu contraseña maestra"
                    ref={register({
                        required: "Ingrese su contraseña",
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                          message: "Contraseña inválida, la contraseña debe contener al menos 1 número, 1 mayúscula y un mínimo de 8 caracteres"
                        }
                      })}/>
                      <div className="error-input">{errors.password && errors.password.message}</div>
                </div>
                <div className="col-lg-6 sm-12">
                    <label>Repite tu contraseña maestra</label>
                    <input 
                    type="password"
                    name="password2"
                    className="input-master-password"
                    placeholder="Repite tu contraseña"
                    ref={register({
                        required: "Ingrese su contraseña",
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                          message: "Contraseña inválida"
                        }
                      })}/>
                   <div className="error-input">{errors.password2 && errors.password2.message}</div>
                </div>
            </div>

            <div className="info">
                <div className="col-description"><p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p></div>
            </div>

            <div className="row info">
                <div className="col-lg-8 sm-12">
                <label>Crea tu pista para recordar tu contraña (Opcional)</label>
                    <input 
                    type="text" 
                    name="pista" 
                    className="input-master-forget-clue"
                    placeholder=""
                    ref={register()}/>
                </div>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </>)


}