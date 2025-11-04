# 📧 Form Contatti con FormSubmit - ZERO Configurazione!

Sistema di form contatti **COMPLETAMENTE GRATUITO** e **ILLIMITATO** usando FormSubmit.

---

## ✨ Vantaggi di FormSubmit

✅ **ZERO configurazione backend** - Niente PHP, niente server  
✅ **ZERO registrazione richiesta** (opzionale)  
✅ **COMPLETAMENTE GRATIS** - Invii illimitati  
✅ **Nessun limite** - Email illimitate  
✅ **Protezione spam** integrata  
✅ **Email HTML professionali**  
✅ **Funziona immediatamente**  

---

## 🚀 INSTALLAZIONE IN 2 MINUTI

### Passo 1: Personalizza l'email

Apri `index.html` e trova la riga 27:

```html
<form action="https://formsubmit.co/TUA-EMAIL@esempio.it" method="POST">
```

**Sostituisci `TUA-EMAIL@esempio.it` con la tua email vera!**

Esempio:
```html
<form action="https://formsubmit.co/mario.rossi@gmail.com" method="POST">
```

### Passo 2: (Opzionale) Personalizza l'URL di ringraziamento

Trova la riga 33:

```html
<input type="hidden" name="_next" value="https://tuosito.it/grazie.html">
```

**Sostituisci con l'URL del tuo sito:**

```html
<input type="hidden" name="_next" value="https://miosito.com/grazie.html">
```

### Passo 3: Carica sul server

Carica tutti i file sul tuo hosting:
- `index.html`
- `formsubmit-style.css`
- `formsubmit-script.js`
- `grazie.html`

### ✅ FATTO! 

Il tuo form è funzionante!

---

## 📝 PRIMO UTILIZZO

**IMPORTANTE**: La prima volta che qualcuno usa il form, FormSubmit invierà un'email di conferma.

### Cosa succede al primo invio:

1. **Utente compila il form** e preme "Invia"
2. **FormSubmit invia email di conferma** al TUO indirizzo email
3. **Tu clicchi sul link** nell'email di conferma
4. **Attivazione completata!** Da ora in poi tutti i form arrivano direttamente

### Dopo la conferma:

Tutti i successivi invii del form arriveranno **direttamente** alla tua email, senza bisogno di ulteriori conferme.

---

## 🎨 PERSONALIZZAZIONE

### 1. Cambia i colori del gradiente

Apri `formsubmit-style.css` e modifica la riga 10:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Usa i tuoi colori brand:
```css
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
```

### 2. Cambia l'oggetto dell'email

In `index.html`, riga 30:

```html
<input type="hidden" name="_subject" value="🆕 Nuovo contatto dal sito web!">
```

Personalizza come preferisci:
```html
<input type="hidden" name="_subject" value="📞 Richiesta Info - Il Mio Sito">
```

### 3. Abilita il captcha (anti-bot)

In `index.html`, riga 36, **rimuovi** questa riga:

```html
<input type="hidden" name="_captcha" value="false">
```

FormSubmit mostrerà automaticamente un captcha agli utenti.

### 4. Invia copia a più indirizzi

In `index.html`, riga 42, **decomenta** e personalizza:

```html
<input type="hidden" name="_cc" value="altro-indirizzo@esempio.it">
```

Puoi aggiungere più indirizzi separati da virgola:
```html
<input type="hidden" name="_cc" value="email1@esempio.it,email2@esempio.it">
```

### 5. Cambia template email

In `index.html`, riga 39:

```html
<input type="hidden" name="_template" value="box">
```

Template disponibili:
- `box` (default, consigliato)
- `table` (stile tabella)
- `default` (testo semplice)

---

## 🔧 OPZIONI AVANZATE FORMSUBMIT

Puoi aggiungere questi campi nascosti per funzionalità extra:

### Auto-risposta all'utente

```html
<input type="hidden" name="_autoresponse" value="Grazie per averci contattato! Ti risponderemo presto.">
```

### Disabilita email di conferma (non raccomandato)

```html
<input type="hidden" name="_confirmation" value="">
```

### Reindirizza a URL specifico in base all'input

```html
<input type="hidden" name="_next" value="https://tuosito.it/grazie.html?nome={nome}&email={email}">
```

---

## 📋 STRUTTURA FILE

```
formsubmit-form/
├── index.html                 # Form principale
├── formsubmit-style.css       # Stile e design
├── formsubmit-script.js       # Validazione JavaScript
├── grazie.html                # Pagina di ringraziamento
└── README.md                  # Questa guida
```

---

## ✅ CHECKLIST INSTALLAZIONE

- [ ] Sostituita `TUA-EMAIL@esempio.it` con la tua email vera
- [ ] Personalizzato URL in `_next` (se necessario)
- [ ] Caricati tutti i file sul server
- [ ] Testato il form inviando un messaggio di prova
- [ ] Confermato l'email cliccando sul link (solo prima volta)
- [ ] Verificato che i successivi invii arrivano direttamente

---

## 🆘 RISOLUZIONE PROBLEMI

### Email non arrivano

**Possibili cause:**

1. **Prima volta che usi FormSubmit**  
   → Controlla la tua email per la conferma da FormSubmit.co

2. **Email nella cartella spam**  
   → Cerca "FormSubmit" nello spam

3. **Email scritta male in index.html**  
   → Verifica di aver scritto correttamente l'indirizzo

4. **Form non invia**  
   → Apri la Console del browser (F12) e cerca errori

### Il form non invia

1. **Controlla la connessione internet**
2. **Verifica che tutti i campi obbligatori siano compilati**
3. **Apri la Console Browser** (F12 → Console) per vedere errori JavaScript

### Il form invia ma non reindirizza

Verifica che il campo `_next` contenga un URL completo e valido:

```html
<input type="hidden" name="_next" value="https://tuosito.com/grazie.html">
```

Non usare percorsi relativi come `./grazie.html`

---

## 🔒 SICUREZZA E PRIVACY

### Protezioni incluse:

✅ **Honeypot** - Campo nascosto per bloccare bot  
✅ **Validazione HTML5** - Campi obbligatori e formati validati  
✅ **Validazione JavaScript** - Controlli lato client  
✅ **Rate limiting** - FormSubmit limita invii sospetti  

### GDPR:

Il form include:
- Consenso privacy obbligatorio
- Consenso marketing opzionale
- Link a informativa privacy

**Ricorda:** Devi avere una pagina di privacy policy sul tuo sito!

---

## 📊 LIMITAZIONI

FormSubmit è **completamente gratuito e illimitato**, ma ha alcune limitazioni:

❌ Non puoi personalizzare completamente il design dell'email  
❌ Le email vengono inviate da `noreply@formsubmit.co`  
❌ Richiede conferma la prima volta  
❌ Non hai statistiche avanzate o dashboard  

**Se hai bisogno di queste funzionalità**, considera alternative come:
- Formspree (50 invii/mese gratis)
- EmailJS (200 invii/mese gratis)
- Backend personalizzato con Brevo

---

## 💡 SUGGERIMENTI

1. **Testa sempre il form** prima di metterlo in produzione
2. **Aggiungi il tuo email allo spam whitelist** per essere sicuro di ricevere i messaggi
3. **Usa un indirizzo email dedicato** per i form (es. info@tuosito.it invece della tua personale)
4. **Controlla regolarmente lo spam** nei primi giorni
5. **Configura regole email** per organizzare automaticamente i messaggi dal form

---

## 🎨 ESEMPI DI PERSONALIZZAZIONE

### Esempio: E-commerce

```html
<input type="hidden" name="_subject" value="🛒 Nuovo ordine dal sito">
<input type="hidden" name="_template" value="box">
```

### Esempio: Portfolio/Freelance

```html
<input type="hidden" name="_subject" value="💼 Richiesta preventivo">
<input type="hidden" name="_next" value="https://tuoportfolio.com/preventivo-inviato.html">
```

### Esempio: Landing page

```html
<input type="hidden" name="_subject" value="🚀 Nuova iscrizione landing page">
<input type="hidden" name="_cc" value="team@azienda.it,marketing@azienda.it">
```

---

## 📚 RISORSE UTILI

- **Documentazione FormSubmit:** https://formsubmit.co/
- **Test email validator:** https://www.email-validator.net/
- **Generatore colori gradient:** https://cssgradient.io/

---

## ❓ FAQ

**Q: È davvero gratis per sempre?**  
A: Sì! FormSubmit è 100% gratuito senza limiti.

**Q: Posso usarlo su più siti?**  
A: Sì, puoi usare FormSubmit su infiniti siti/form.

**Q: Funziona con WordPress?**  
A: Sì, basta inserire il codice HTML in una pagina/post WordPress.

**Q: Posso salvare i contatti in un database?**  
A: No, FormSubmit invia solo email. Se vuoi un database, usa una soluzione con backend PHP.

**Q: Le email arrivano istantaneamente?**  
A: Sì, solitamente entro pochi secondi dall'invio.

**Q: Posso personalizzare l'email mittente?**  
A: No, le email arrivano sempre da `noreply@formsubmit.co`. Il mittente personalizzato richiede soluzioni come Brevo/SendGrid.

---

## ✨ MIGLIORIE FUTURE

Funzionalità che potresti aggiungere:

- [ ] Google Analytics tracking per invii form
- [ ] Integrazione con Google Sheets per storico
- [ ] Webhook per inviare dati a servizi terzi
- [ ] Notifiche WhatsApp/Telegram oltre all'email

---

**Pronto per usare il tuo form! 🚀**

Se hai domande, consulta la documentazione ufficiale di FormSubmit:  
👉 https://formsubmit.co/
