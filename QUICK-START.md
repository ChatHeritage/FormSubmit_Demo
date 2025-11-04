# ⚡ GUIDA RAPIDA - 2 Minuti

## 🎯 Come usare questo form in 2 PASSI

### PASSO 1: Cambia la tua email

Apri `index.html` con un editor di testo e trova questa riga (circa riga 27):

```html
<form action="https://formsubmit.co/TUA-EMAIL@esempio.it" method="POST">
```

**Sostituisci `TUA-EMAIL@esempio.it` con la TUA email vera!**

Esempio:
```html
<form action="https://formsubmit.co/mario.rossi@gmail.com" method="POST">
```

### PASSO 2: Carica i file

Carica tutti i file sul tuo server (via FTP, cPanel, o altro):
- `index.html`
- `formsubmit-style.css`
- `formsubmit-script.js`
- `grazie.html`

---

## ✅ FATTO!

Il tuo form è pronto e funzionante!

---

## 📧 PRIMA VOLTA

**IMPORTANTE:** La prima volta che qualcuno usa il form:

1. FormSubmit ti invierà un'email di conferma
2. Clicca sul link nell'email per attivare il form
3. Da quel momento tutti i form arriveranno direttamente!

---

## 🎨 PERSONALIZZAZIONI OPZIONALI

### Cambia l'URL di ringraziamento

In `index.html`, riga 33, cambia:

```html
<input type="hidden" name="_next" value="https://tuosito.it/grazie.html">
```

Con il tuo sito:

```html
<input type="hidden" name="_next" value="https://miosito.com/grazie.html">
```

### Cambia oggetto email

In `index.html`, riga 30:

```html
<input type="hidden" name="_subject" value="🆕 Nuovo contatto dal sito web!">
```

Personalizza come vuoi:

```html
<input type="hidden" name="_subject" value="Richiesta info dal sito">
```

### Abilita il captcha (anti-spam)

In `index.html`, **elimina** la riga 36:

```html
<input type="hidden" name="_captcha" value="false">
```

---

## 🔧 ALTRE OPZIONI

### Invia copia a più persone

In `index.html`, riga 42, **decommenta** e personalizza:

```html
<input type="hidden" name="_cc" value="email1@esempio.it,email2@esempio.it">
```

---

## 📋 CHECKLIST

- [ ] Sostituita la tua email in `index.html`
- [ ] Caricati i file sul server
- [ ] Testato il form
- [ ] Confermata l'email (prima volta)
- [ ] Tutto funziona!

---

## 🆘 PROBLEMI?

**Email non arriva?**
- Controlla lo spam per email da "FormSubmit"
- Verifica di aver scritto bene la tua email in `index.html`

**Form non invia?**
- Verifica che tutti i campi obbligatori siano compilati
- Apri F12 → Console per vedere eventuali errori

---

## 📚 PIÙ INFO

Leggi il `README.md` completo per tutte le opzioni avanzate!

---

**Buon lavoro! 🚀**
