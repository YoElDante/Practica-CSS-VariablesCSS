# **Leccion - Variables CSS**
Desde lo más básico hasta técnicas actuales de uso profesional.

---

## 🧱 **Nivel 1: Fundamentos de Variables CSS**

### 🔶 ¿Qué son?

Las **variables CSS** (también llamadas *Custom Properties*) te permiten definir valores reutilizables para colores, tamaños, fuentes, etc.

### 🧩 Sintaxis básica

```css
:root {
  --color-primario: #7B5E57;
  --espaciado-md: 1rem;
}
```

* Se definen dentro de un selector (lo ideal: `:root`).
* Se usan con `var(--nombre-variable)`.

### 📦 Ejemplo simple

```css
:root {
  --fondo: #f8f4ef;
  --texto: #333;
  --espaciado: 1rem;
}

body {
  background-color: var(--fondo);
  color: var(--texto);
  padding: var(--espaciado);
}
```

---

## 📈 **Nivel 2: Variables Escalonadas y Jerarquía**

### 🌳 Ámbito local vs global

```css
:root {
  --color: red;
}

.card {
  --color: blue;
  color: var(--color); /* azul */
}

p {
  color: var(--color); /* rojo (global) */
}
```

Podés redefinir variables en un componente o media query específica.

---

## 🧮 **Nivel 3: Fallbacks**

### 💥 ¿Y si la variable no existe?

```css
color: var(--no-definida, black); /* usa 'black' como respaldo */
```

---

## 📐 **Nivel 4: Responsive con `clamp()` y variables**

### 🔧 ¿Qué es `clamp()`?

Una función que permite definir valores **fluídos** pero con límites:

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

Traducción:

> Usa al menos `1rem`, escalá hasta `2.5vw` (ancho de la pantalla), pero no más de `2rem`.

### 🎯 Ejemplo profesional

```css
:root {
  --fs-base: clamp(1rem, 1.5vw, 1.25rem);
  --fs-title: clamp(1.5rem, 3vw, 2.5rem);
}
```

```css
body {
  font-size: var(--fs-base);
}

h1 {
  font-size: var(--fs-title);
}
```

---

## 🧩 **Nivel 5: Variables Dinámicas y Temas**

Podés cambiar variables **según contexto o modo oscuro**:

```css
:root {
  --color-fondo: #fff;
  --color-texto: #111;
}

[data-theme="dark"] {
  --color-fondo: #111;
  --color-texto: #eee;
}
```

```css
body {
  background: var(--color-fondo);
  color: var(--color-texto);
}
```

Y podés alternar con JS:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## 🧪 **Nivel 6: Variables en `media queries` y adaptabilidad**

```css
@media (max-width: 600px) {
  :root {
    --fs-base: 0.875rem;
  }
}
```

Esto hace que todo lo que usa `--fs-base` se adapte automáticamente sin tener que repetir estilos.

---

## 📐 **Nivel 7: Container Queries y `@container` (nuevo estándar)**

Podés usar variables incluso dentro de contenedores adaptativos:

```css
.card {
  container-type: inline-size;
  container-name: tarjeta;
}

@container tarjeta (min-width: 500px) {
  .card__title {
    font-size: var(--fs-xl);
  }
}
```

Esto es muy potente: el diseño responde **al tamaño del componente**, no solo de la ventana.

---

## 🏆 **Resumen Profesional: Buenas Prácticas**

| Recomendación                               | Descripción                                |
| ------------------------------------------- | ------------------------------------------ |
| 📁 Organiza variables por tema              | Tipografía, colores, espacios, etc.        |
| 🌐 Usa `:root` para variables globales      | Evita repetición y facilita mantenimiento. |
| 🎯 Nombra con intención                     | `--btn-color`, `--header-height`, etc.     |
| 🧠 Combiná con `clamp()` y media queries    | Para diseño fluido y responsive sin hacks. |
| 🔄 Implementá temas con `[data-theme]`      | Oscuro, claro, corporativo, etc.           |
| 📏 Usá variables en `@media` y `@container` | Para control fino y escalabilidad.         |

---
