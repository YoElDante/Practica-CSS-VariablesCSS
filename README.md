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

### ✅ Forma correcta de declarar variables CSS reutilizables

```css
:root {
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 2rem;
}
```
---

### 🧠 ¿Por qué en `:root`?

* `:root` representa el elemento `html`, pero con mayor **especificidad**.
* Las variables definidas en `:root` son **accesibles desde cualquier parte** del CSS.

---

### 🛠️ Cómo usarlas luego:

```css
.body__text {
  font-size: var(--font-size-base);
}

.card__title {
  font-size: var(--font-size-lg);
}
```

---

### ✨ Tip adicional

Podés agrupar más variables en `:root`, por ejemplo:

```css
:root {
  /* Tipografía */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 2rem;

  /* Colores */
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;

  /* Espaciados */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}
```

Esto hace que tu sistema de diseño sea **coherente, escalable y profesional**.

---

### 🧠 **¿Qué es `:root` en CSS?**

El selector `:root` es una pseudo-clase que representa el **elemento raíz del documento**, que en HTML es el `<html>`.

```css
:root {
  --color-primary: #7B5E57;
  --font-size-base: 1rem;
}
```

---

### ✅ **Ventajas de usar `:root` para definir variables CSS**

1. ### 📦 **Alcance global**

   Las variables definidas en `:root` están disponibles en **todo el documento**, lo que te permite usarlas desde cualquier selector sin tener que redefinirlas.

   ```css
   .header {
     background-color: var(--color-primary);
   }

   p {
     font-size: var(--font-size-base);
   }
   ```

2. ### 🌳 **Mayor especificidad que otros selectores globales**

   `:root` tiene mayor especificidad que el selector `html`, por lo que **las variables no serán sobrescritas accidentalmente** por reglas menos específicas.

3. ### 🧼 **Separación clara entre configuración y estilo**

   Es una forma ordenada de centralizar tus *design tokens* (colores, tamaños, espaciados, etc.), al estilo de una hoja de configuración o tema:

   ```css
   :root {
     /* Colores */
     --color-bg: #f9f9f9;
     --color-text: #333;

     /* Tipografía */
     --font-size-sm: 0.875rem;
     --font-size-lg: 1.25rem;

     /* Espaciados */
     --spacing-sm: 0.5rem;
     --spacing-lg: 2rem;
   }
   ```

4. ### 📱 **Ideal para personalización con media queries**

   Podés redefinir variables dentro de un media query para cambiar estilos globales **sin duplicar código**:

   ```css
   @media (max-width: 600px) {
     :root {
       --font-size-base: 0.9rem;
       --spacing-lg: 1rem;
     }
   }
   ```

   Así, todo lo que dependa de esas variables se adapta automáticamente al tamaño de pantalla, sin modificar cada clase.

5. ### 🌈 **Permite crear temas fácilmente**

   Si necesitás un modo oscuro, solo redefinís las variables dentro de una clase `.dark` o `data-theme="dark"`:

   ```css
   :root {
     --color-bg: #fff;
     --color-text: #000;
   }

   [data-theme="dark"] {
     --color-bg: #121212;
     --color-text: #eee;
   }
   ```

---

### 🚫 ¿Y si no usás `:root`?

Si definís una variable dentro de un selector **más específico**, como `.header` o `body`, su uso **queda limitado** a ese selector y sus hijos:

```css
/* Esto solo funcionará dentro de .header y sus descendientes */
.header {
  --color-special: red;
}
```

Eso está bien si necesitás variables **locales a un bloque**, pero no para estilos globales reutilizables.

---

### ✅ Conclusión

> **Definir variables CSS en `:root` es la práctica recomendada** para asegurar su disponibilidad global, mantener código limpio y hacer tus estilos más escalables y fáciles de mantener.

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

## 🧠 **¿Qué es `clamp()`?**

**def.** **`clamp()`** es una **función CSS** que permite establecer un **valor dinámico y fluido**, acotado dentro de un **mínimo y un máximo**, ideal para tipografías, anchos, márgenes, paddings, etc., en diseño responsivo.

### 🔍 **Sintaxis**

```css
clamp(valor-mínimo, valor-ideal, valor-máximo)
```

* **valor-mínimo**: el valor más pequeño que se puede usar.
* **valor-ideal**: el valor que CSS intentará aplicar (normalmente `vw`, `em`, etc.).
* **valor-máximo**: el valor más grande permitido.

### 📜 **¿Desde cuándo está disponible?**

* Introducida en **CSS Values and Units Module Level 4**.
* Soportada por la mayoría de navegadores desde **2020** (Chrome 79+, Firefox 75+, Safari 13.1+).

---

## 📐 **Ejemplo básico con `font-size`**

```css
h1 {
  font-size: clamp(1.5rem, 2.5vw, 3rem);
}
```

Esto significa:

* Nunca será menor a **1.5rem**.
* Idealmente usará un tamaño relativo a la pantalla (**2.5vw**).
* Nunca crecerá más de **3rem**.

---

## 🎯 **Ventajas**

✅ Hace el diseño más **responsivo y fluido** sin múltiples media queries.
✅ Muy útil en **componentes reusables** y tipografía adaptable.
✅ Compatible con **variables CSS**, potenciando su reutilización.

---

## 👨‍💻 **Ejemplo profesional actual**

```css
:root {
  --fs-body: clamp(1rem, 1.5vw, 1.25rem);
  --fs-title: clamp(2rem, 5vw, 3rem);
}

body {
  font-size: var(--fs-body);
}

h1 {
  font-size: var(--fs-title);
}
```

Este patrón es usado por sitios modernos como [Stripe](https://stripe.com) o [Smashing Magazine](https://www.smashingmagazine.com), que priorizan legibilidad sin romper el diseño.

---

## 💡 **Buenas prácticas**

* ✅ Úsalo en tipografías, paddings, anchos, márgenes.
* ✅ Combínalo con `rem`, `vw`, `%` y **variables CSS**.
* ❌ No abuses de valores extremos que dificulten la lectura.
* ✅ Úsalo para evitar `@media` innecesarios.

---

## 📦 **Ejemplo completo**

```css
:root {
  --padding-container: clamp(1rem, 5vw, 3rem);
}

.container {
  padding-left: var(--padding-container);
  padding-right: var(--padding-container);
}
```

Así se adapta automáticamente a pantallas pequeñas, medianas y grandes sin media queries.

---

## 📐 ¿De qué depende `clamp()`?

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

Esta función evaluará **la segunda expresión** (`2.5vw`, en este ejemplo), y:

* Si el valor calculado es **menor que el mínimo** (`1rem`), usará **1rem**.
* Si es **mayor que el máximo** (`2rem`), usará **2rem**.
* Si está **entre ambos**, usará ese valor calculado (`2.5vw`).

---

### 📌 ¿Y de qué depende ese `2.5vw`?

**Depende del ancho del viewport**, es decir, del **ancho total del navegador visible**.

> 📏 `1vw` = 1% del **ancho del viewport**

No se basa en:

* ❌ El tamaño del contenedor (a menos que uses unidades relativas como `%`, que no se usan en `clamp()` directamente).
* ❌ El `font-size` del padre (aunque **sí afecta la unidad `em` o `rem` si las usás**).
* ❌ Los elementos hermanos o el contenido.

---

## 🧪 Ejemplo práctico para ver cómo responde

```css
:root {
  --fs-fluid: clamp(1rem, 2vw, 2rem);
}

p {
  font-size: var(--fs-fluid);
}
```

* En una pantalla de **400px de ancho**, `2vw` = `8px` → como es menor a `1rem` (16px), usará `1rem`.
* En una pantalla de **800px**, `2vw` = `16px` → usará `1rem` o `16px`, igual.
* En **1200px**, `2vw` = `24px`, pero como el máximo es `2rem` (32px), se limita a **2rem** si lo supera.

---

## 🧠 Tip Pro

Para obtener un crecimiento suave y útil:

```css
font-size: clamp(1rem, 1.5vw + 1rem, 2rem);
```

🔎 Esto combina **`vw` + `rem`** para que no dependa solo del ancho del viewport, sino que crezca con una base razonable.

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

### 🗂️ ¿Qué estamos haciendo?

Estamos creando **temas personalizados** (como **modo claro** / **modo oscuro**) usando:

1. **Custom properties (variables CSS)**.
2. **Selectores CSS con atributos (`[data-theme="dark"]`)**.
3. **JavaScript para alternar el atributo `data-theme`** en el HTML.

---

## 🔍 Parte por parte

### 🎯 1. **¿Qué es `[data-theme="dark"]`?**

Es un **selector de atributo**.

```css
[data-theme="dark"] {
  --color-fondo: #111;
  --color-texto: #eee;
}
```

✅ Significa:
**"Aplicar estas reglas a cualquier elemento HTML que tenga el atributo `data-theme="dark"`"**.

🧠 En este caso, lo aplicamos a la etiqueta `html` (con `document.documentElement` en JS):

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

---

### 🗂️ 2. ¿De dónde viene ese `dark`?

Lo definís vos. Es un **valor personalizado del atributo `data-theme`**.
Pueden existir más valores si querés:

```css
[data-theme="light"] { ... }
[data-theme="solarized"] { ... }
[data-theme="forest"] { ... }
```

🌗 En nuestro ejemplo usamos dos temas:

* **Modo claro**: por defecto (en `:root`)
* **Modo oscuro**: con `[data-theme="dark"]`

---

### 🧪 3. ¿Por qué se usan variables CSS en este contexto?

Porque **permiten redefinir solo los valores** y **no toda la estructura** del CSS.

🎯 Ejemplo:

```css
:root {
  --bg: #fff;
  --fg: #000;
}
[data-theme="dark"] {
  --bg: #000;
  --fg: #fff;
}
body {
  background-color: var(--bg);
  color: var(--fg);
}
```

⚡ Con eso, **cambiás TODO el diseño visual** sin tener que duplicar clases o escribir más reglas CSS.

---

### ⚙️ 4. ¿Cómo lo activa el JS?

Con una línea:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

🔄 Podés cambiar entre modos así:

```js
const currentTheme = document.documentElement.getAttribute('data-theme');
document.documentElement.setAttribute(
  'data-theme',
  currentTheme === 'dark' ? 'light' : 'dark'
);
```

Incluso se puede guardar en `localStorage` para recordar el modo que eligió el usuario.

---

## ✅ Beneficios reales de este enfoque

| Ventaja         | ¿Por qué es importante?                                |
| --------------- | ------------------------------------------------------ |
| ♻️ Reutilizable | No repetís clases ni estilos                           |
| ⚙️ Escalable    | Podés agregar más temas fácilmente                     |
| 🎯 Preciso      | Solo cambiás las variables, no toda la hoja de estilos |
| 💡 Ligero       | Ideal para cambios visuales rápidos desde JS           |

---

### 📌 Recapitulando: ¿Qué es `data-theme` entonces?

**`data-theme` es un atributo personalizado** definido por el desarrollador usando la convención `data-*`, que es parte del estándar HTML5. Esto significa:

> **Podés crear cualquier atributo que empiece con `data-` para almacenar información personalizada en un elemento HTML.**

---

### ✳️ ¿Cómo se usa `data-theme`?

Vos lo creás y lo usás así:

```html
<html data-theme="dark">
  <body>...</body>
</html>
```

En este caso, `data-theme="dark"` es solo una etiqueta que vos definiste para luego poder utilizarla como selector en CSS:

```css
[data-theme="dark"] {
  --background-color: #111;
  --text-color: #eee;
}
```

O desde JavaScript:

```js
document.documentElement.setAttribute("data-theme", "light");
```

---

### 📌 ¿Por qué usar `data-theme`?

Porque:

* Es **semántico** y claro.
* Es **seguro**: no interfiere con los atributos nativos.
* Permite **seleccionar fácilmente temas en CSS** sin agregar clases innecesarias.

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

### 🧠 ¿Qué son las *Container Queries*?

Las *Container Queries* permiten aplicar estilos **basados en el tamaño del contenedor**, en lugar del tamaño de la **ventana del navegador** como en los media queries tradicionales.

> 🧩 Esto significa que un **componente puede volverse responsive por sí mismo**, sin depender del viewport global.

---

## 🔄 Diferencia clave con `@media`

| `@media`                                | `@container`                           |
| --------------------------------------- | -------------------------------------- |
| Reacciona al **tamaño de la ventana**   | Reacciona al **tamaño del contenedor** |
| Se usa en diseños globales              | Se usa en componentes independientes   |
| Poco flexible para componentes anidados | Muy útil para diseños modulares        |

---

### 🛠️ ¿Cómo se usa?

#### 1. Se define el contenedor:

```css
.card {
  container-type: inline-size; /* activa container query por ancho */
  container-name: tarjeta;     /* opcional: le da nombre al contenedor */
}
```

* `inline-size`: mide el ancho (como `width`).
* `block-size`: mide la altura (menos común).
* `container-name`: permite luego referenciarlo.

#### 2. Se aplican estilos según el tamaño del contenedor:

```css
@container tarjeta (min-width: 500px) {
  .card__title {
    font-size: var(--fs-xl);
  }
}
```

> Si `.card` tiene más de 500px de ancho, el título será más grande.

---

### 🔍 ¿Por qué es tan poderoso?

Porque **el componente se adapta a su espacio real**, sin importar si está en móvil, sidebar, una columna o pantalla completa.

Ejemplo real:

```html
<aside class="card">…</aside>   <!-- angosta -->
<main class="card">…</main>     <!-- ancha -->
```

Con Container Queries:

* Ambas `.card` comparten el mismo CSS.
* Pero **cada una se adapta al espacio disponible**, no al tamaño del viewport.

---

## ✅ Ventajas profesionales

* **Diseño modular** y basado en componentes.
* Mejora la reutilización (no hay que duplicar media queries).
* Muy útil para bibliotecas, componentes web y sistemas de diseño.
* Compatible con `:root`, `:is()`, `clamp()`, y **variables CSS**.

---

### 📅 Compatibilidad

* Soportado en **todos los navegadores modernos** (Chrome, Firefox, Edge, Safari) desde **2023 en adelante**.
* Requiere que el contenedor esté definido explícitamente (`container-type`), no se activa solo.

---

### ⚠️ Buenas prácticas

* Usalo para componentes **reutilizables** (cards, sidebars, widgets).
* Evitá sobrecargar el contenedor con múltiples queries muy específicas.
* Podés **combinar con `@media`** si necesitás adaptar al viewport global *y* al tamaño local.

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