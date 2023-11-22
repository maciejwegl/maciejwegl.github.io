// Menu operators


document.getElementsByClassName('hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('menu-open')[0].classList.toggle('open');
})

document.getElementsByClassName('menu-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('menu-open')[0].classList.toggle('open');
})


// Form validation

let newAppointment = function(appointment) {

    let appointmentErrors = document.getElementById('appointment-errors');
    
    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(resJSON => {
        
        console.log(resJSON);
        appointmentErrors.classList.add('sent');
        let infoSent = document.createElement('li');
        infoSent.innerText = `${resJSON.appointment.name} Dziękujemy, Twoje zgłoszenie zostało wysłane`;
        appointmentErrors.appendChild(infoSent);
        
    })
    .catch((error) => {
        console.error(error);
    })
};


document.getElementById('appointment-form').addEventListener('submit', function(event) {

    let appointmentErrors = document.getElementById('appointment-errors');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;

    let appName = document.getElementById('appointment-name');
    let appEmail = document.getElementById('appointment-email');
    let appService = document.getElementById('appointment-service');
    let appPhone = document.getElementById('appointment-phone');
    let appDate = document.getElementById('appointment-date');
    let appTime = document.getElementById('appointment-time');
    let appMessage = document.getElementById('form-message');

    let appointment = {
        name: appName.value,
        email: appEmail.value,
        service: appService.value,
        phone: appPhone.value,
        date: appDate.value,
        time: appTime.value,
        message: appMessage.value
    };

    let validatePhoneNumber = function(appPhone) {
    let re = /^[0-9\+]{9,13}$/;
    return re.test(appPhone);
    }
    

    let phoneVal = '/^[0-9\+]{8,13}$/' ;

    appointmentErrors.innerHTML = '';


    if(appName.value.trim() === '') {
        appName.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Wpisz swoje imie';
        appointmentErrors.appendChild(listError);
    } else {
        appName.classList.remove('error');
    }

    if(appEmail.value.trim() === '') {
        appEmail.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Wpisz adres email';
        appointmentErrors.appendChild(listError);
    } else {
        appEmail.classList.remove('error');
    }

    if(!appEmail.value.includes('@')) {
        appEmail.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Adres email musi zawierać @';
        appointmentErrors.appendChild(listError);
    } else {
        appEmail.classList.remove('error');
    }

    if(appService.value.trim() === '') {
        appService.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Wybierz rodzaj usługi';
        appointmentErrors.appendChild(listError);
    } else {
        appService.classList.remove('error');
    }


    if(!validatePhoneNumber(appPhone.value)) {
        appPhone.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Wpisz prawidłowy numer telefonu';
        appointmentErrors.appendChild(listError);
    }
    
    else {
        appPhone.classList.remove('error');
    }


    if(appDate.value.trim() === '') {
        appDate.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Podaj datę';
        appointmentErrors.appendChild(listError);
    } else {
        appDate.classList.remove('error');
    }

    if(appTime.value.trim() === '') {
        appTime.classList.add('error');
        appointmentErrors.classList.add('error');
        let listError = document.createElement('li');
        listError.innerText = 'Podaj godzinę';
        appointmentErrors.appendChild(listError);
    } else {
        appTime.classList.remove('error');
    }


    if(appointmentErrors.children.length > 0) {
        event.preventDefault();
    } else {
        event.preventDefault();
        newAppointment(appointment);
    }

    
});