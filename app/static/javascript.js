(function(win, doc) {
    'use strict';
    if (doc.querySelector('.btnDel')) {
        let btnDel = doc.querySelectorAll('.btnDel');
        for (let i = 0; i < btnDel.length; i++) {
            btnDel[i].addEventListener('click', function(event) {
                if (confirm('Deseja realmente excluir este registro?')) {
                    return true;
                } else {
                    event.preventDefault();
                }
            });
        }
    }

    if (doc.querySelector('#form')) {
        let form = doc.querySelector('#form');

        function sendForm(event) {
            event.preventDefault();
            let data = new FormData(form);
            let ajax = new XMLHttpRequest();
            let token = doc.querySelectorAll('input')[0].value;
            ajax.open('POST', form.action);
            ajax.setRequestHeader('X-CSRF-TOKEN', token);
            ajax.onreadystatechange = function() {
                if (ajax.status === 200 && ajax.readyState === 4) {
                    success('Cadastrado com sucesso!');
                }
            }
            ajax.send(data);
        }
        form.addEventListener('submit', sendForm, false)
    }

    function success(msg) {
        Command: toastr["success"](msg)
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }


})(window, document);