// Validazione e miglioramenti UX per FormSubmit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.btn-submit');

    // Validazione real-time dei campi
    const validators = {
        nome: {
            validate: (value) => value.trim().length >= 2,
            message: 'Il nome deve contenere almeno 2 caratteri'
        },
        sesso: {
            validate: (value) => value !== '',
            message: 'Seleziona il sesso'
        },
        eta: {
            validate: (value) => value >= 18 && value <= 120,
            message: 'L\'età deve essere compresa tra 18 e 120 anni'
        },
        nazione: {
            validate: (value) => value !== '',
            message: 'Seleziona la nazione'
        },
        email: {
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Inserisci un\'email valida'
        },
        cellulare: {
            validate: (value) => /^[0-9+\s\-()]{8,20}$/.test(value),
            message: 'Inserisci un numero di telefono valido'
        },
        privacy: {
            validate: (value) => value === true,
            message: 'Devi accettare l\'informativa privacy'
        }
    };

    // Aggiungi feedback visivo ai campi
    Object.keys(validators).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!field) return;

        field.addEventListener('blur', () => validateField(fieldName));
        field.addEventListener('input', () => {
            // Rimuovi il messaggio di errore mentre l'utente digita
            const value = field.type === 'checkbox' ? field.checked : field.value;
            const validator = validators[fieldName];
            
            if (validator && validator.validate(value)) {
                field.setCustomValidity('');
            }
        });
    });

    // Validazione singolo campo
    function validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const validator = validators[fieldName];

        if (!field || !validator) return true;

        let value = field.type === 'checkbox' ? field.checked : field.value;
        const isValid = validator.validate(value);

        if (!isValid) {
            field.setCustomValidity(validator.message);
            field.reportValidity();
            return false;
        } else {
            field.setCustomValidity('');
            return true;
        }
    }

    // Formattazione automatica del numero di telefono
    const cellulareInput = document.getElementById('cellulare');
    if (cellulareInput) {
        cellulareInput.addEventListener('input', function(e) {
            // Permetti solo numeri, +, spazi, trattini e parentesi
            let value = e.target.value.replace(/[^\d+\s\-()]/g, '');
            e.target.value = value;
        });
    }

    // Gestione submit del form
    form.addEventListener('submit', function(e) {
        // Valida tutti i campi prima dell'invio
        let isValid = true;
        Object.keys(validators).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Per favore, correggi gli errori nel form prima di inviare.');
            return;
        }

        // Aggiungi stato di loading
        form.classList.add('submitting');
        submitBtn.textContent = '⏳ Invio in corso...';
        submitBtn.disabled = true;

        // FormSubmit gestisce l'invio automaticamente
        // Il form verrà inviato normalmente dopo questa funzione
    });

    // Gestione età - impedisci valori non validi
    const etaInput = document.getElementById('eta');
    if (etaInput) {
        etaInput.addEventListener('input', function(e) {
            if (this.value < 0) this.value = '';
            if (this.value > 120) this.value = 120;
        });
    }

    // Migliora l'accessibilità - focus sul primo campo con errore
    form.addEventListener('invalid', function(e) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
            firstInvalid.focus();
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, true);

    // Conferma prima di lasciare la pagina se il form è stato modificato
    let formModified = false;
    const formInputs = form.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('change', () => {
            formModified = true;
        });
    });

    window.addEventListener('beforeunload', (e) => {
        if (formModified && !form.classList.contains('submitting')) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });

    // Reset del flag quando il form viene inviato
    form.addEventListener('submit', () => {
        formModified = false;
    });

    // Animazione al caricamento
    setTimeout(() => {
        document.querySelector('.form-wrapper').classList.add('form-success');
    }, 100);
});

// Funzione per auto-resize della textarea
const textarea = document.getElementById('messaggio');
if (textarea) {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}
