# 🎨 ESEMPI DI PERSONALIZZAZIONE

Qui trovi alcuni esempi pronti all'uso per personalizzare il tuo form con diversi colori e stili.

---

## 📋 Come applicare le personalizzazioni

1. Apri `formsubmit-style.css`
2. Trova la sezione indicata nell'esempio
3. Sostituisci il codice con quello dell'esempio che preferisci
4. Salva e ricarica la pagina

---

## 🎨 SCHEMI COLORE PRONTI

### 1. Viola Elegante (Default)
```css
/* Riga 10 in formsubmit-style.css */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 2. Blu Professionale 💼
```css
/* Riga 10 */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### 3. Verde Natura 🌿
```css
/* Riga 10 */
background: linear-gradient(135deg, #56ab2f 0%, #a8e063 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #56ab2f 0%, #a8e063 100%);
}
```

### 4. Rosso Passion ❤️
```css
/* Riga 10 */
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
}
```

### 5. Arancione Energia 🔥
```css
/* Riga 10 */
background: linear-gradient(135deg, #f83600 0%, #f9d423 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
}
```

### 6. Rosa Moderno 💗
```css
/* Riga 10 */
background: linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%);
}
```

### 7. Azzurro Cielo ☁️
```css
/* Riga 10 */
background: linear-gradient(135deg, #667eea 0%, #f89b29 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #667eea 0%, #f89b29 100%);
}
```

### 8. Grigio Corporate 🏢
```css
/* Riga 10 */
background: linear-gradient(135deg, #485563 0%, #29323c 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #485563 0%, #29323c 100%);
}
```

### 9. Viola Scuro Elegante 🌌
```css
/* Riga 10 */
background: linear-gradient(135deg, #5f2c82 0%, #49a09d 100%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #5f2c82 0%, #49a09d 100%);
}
```

### 10. Tramonto 🌅
```css
/* Riga 10 */
background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);

/* Riga 74 */
.btn-submit {
    background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
}
```

---

## 🎯 PERSONALIZZAZIONI AVANZATE

### Cambiare il font

In `formsubmit-style.css`, aggiungi all'inizio (dopo la riga 6):

```css
/* Google Fonts - Esempio con Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

Altri font popolari:
- `Montserrat` - Moderno e pulito
- `Raleway` - Elegante
- `Open Sans` - Professionale
- `Roboto` - Minimalista
- `Lato` - Versatile

### Arrotondare di più gli angoli

```css
/* Trova queste classi e aumenta border-radius */
.form-wrapper {
    border-radius: 24px; /* invece di 16px */
}

input, select, textarea {
    border-radius: 12px; /* invece di 8px */
}

.btn-submit {
    border-radius: 12px; /* invece di 8px */
}
```

### Cambiare le ombre

```css
/* Ombra più leggera */
.form-wrapper {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Ombra più forte */
.form-wrapper {
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}
```

### Bottone più grande

```css
.btn-submit {
    padding: 20px; /* invece di 16px */
    font-size: 20px; /* invece di 18px */
}
```

### Spaziatura maggiore tra i campi

```css
.form-group {
    margin-bottom: 32px; /* invece di 24px */
}
```

---

## 🌟 TEMI COMPLETI PRONTI

### Tema Corporate Professionale

```css
/* Background sobrio */
body {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
}

/* Colori accent */
input:focus, select:focus, textarea:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.btn-submit {
    background: #3498db;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-submit:hover {
    background: #2980b9;
}
```

### Tema Creativo Colorato

```css
/* Background vivace */
body {
    background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
}

/* Campi colorati */
input, select, textarea {
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.95);
}

input:focus, select:focus, textarea:focus {
    border-color: #FA8BFF;
    background: white;
}

.btn-submit {
    background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 100%);
    font-weight: 700;
    box-shadow: 0 5px 20px rgba(250, 139, 255, 0.4);
}
```

### Tema Minimalista Chiaro

```css
/* Background bianco */
body {
    background: #f5f5f5;
}

.form-wrapper {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e0e0;
}

/* Campi semplici */
input, select, textarea {
    border: 1px solid #d0d0d0;
    background: white;
    border-radius: 4px;
}

.btn-submit {
    background: #333;
    border-radius: 4px;
}

.btn-submit:hover {
    background: #555;
}
```

---

## 🔧 TIPS & TRICKS

### 1. Aggiungere un logo

Aggiungi questo HTML in `index.html` dopo il tag `<div class="form-wrapper">`:

```html
<div style="text-align: center; margin-bottom: 30px;">
    <img src="logo.png" alt="Logo" style="max-width: 150px;">
</div>
```

### 2. Cambiare l'icona del form

Nel `<h1>` di `index.html`, cambia l'emoji:

```html
<h1>📧 Contattaci</h1>  <!-- Email -->
<h1>💬 Parliamone</h1>  <!-- Chat -->
<h1>🚀 Iniziamo</h1>     <!-- Rocket -->
<h1>👋 Ciao!</h1>        <!-- Wave -->
```

### 3. Animazione più lenta/veloce

In `formsubmit-style.css`:

```css
@keyframes slideUp {
    /* Cambia duration */
}

.form-wrapper {
    animation: slideUp 0.3s ease-out; /* Più veloce */
    /* oppure */
    animation: slideUp 1s ease-out;   /* Più lento */
}
```

### 4. Form più largo/stretto

```css
.container {
    max-width: 800px; /* Più largo (default 600px) */
    /* oppure */
    max-width: 500px; /* Più stretto */
}
```

---

## 🎨 GENERATORI UTILI

- **Gradient Generator:** https://cssgradient.io/
- **Color Palette:** https://coolors.co/
- **Google Fonts:** https://fonts.google.com/
- **Box Shadow Generator:** https://cssgenerator.org/box-shadow-css-generator.html

---

## 📱 OTTIMIZZAZIONE MOBILE

Il form è già responsive, ma puoi modificare ulteriormente:

```css
@media (max-width: 640px) {
    h1 {
        font-size: 28px; /* Più grande su mobile */
    }
    
    .btn-submit {
        padding: 18px; /* Pulsante più grande per touch */
        font-size: 16px;
    }
    
    input, select, textarea {
        font-size: 16px; /* Evita zoom su iOS */
    }
}
```

---

**Divertiti a personalizzare! 🎨**

Ricorda di testare sempre il form dopo le modifiche!
