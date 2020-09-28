import React from 'react';

import Swal from 'sweetalert2';

export default function Footer(){

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

    return (
        
        <div className="App-footer">

        <div className="container container-footer">
            <div className="left"></div>
            <div className="right">
                <button className="button-next" onClick={() => handleNext()}>Siguiente {'>'}</button></div>
        </div>

    </div>

    )

}