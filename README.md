# Blog Nextjs & Markdown

## Requerimientos

-   Node (20v)

He presentado problemas con npm, al tratar de inicializar un proyecto de **Nextjs** y
**Mdx-Remote**. Por otro lado, con yarn no he presentado inconvenientes.

## Pasos

1- Instalar yarn: Abré una terminal y antes de hacer copy/paste dirigite al directorio que está a
nivel de usuario, ejem: $saul-home

```
npm install --global yarn
```

2- Inicializar proyecto:

Dirigete al directorio donde crearás el proyecto

```
yarn create next-app -e with-mdx-remote
```

Esto creará un proyecto con el enrutado de next12, además de que ya traerá todo instalado respecto a
**mdx-remote**, e inclusive tendrá ejemplos, solo falta instalar tailwind.

3- Agregar tailwind al proyecto:

```
yarn add  tailwindcss postcss autoprefixer --dev
```

4- Inicializar tailwind:

```
npx tailwindcss init -p
```

5- Configurar tailwind: dirijete a la raiz y busca el archivo: **tailwind.config.js** y has
copy/paste lo siguiente:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6- Conectar tailwind y nextjs: Lo más probable es que no tengas ningun archivo css o carpeta de
estilos, en el archivo raíz crea una carpeta llamada **styles** y dentro un archivo **globals.css**,
dentro has un copy/paste

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Luego dirigete a la carpeta **Pages**, y crea un archivo **\_app.js** El "por qué" es para solo
tener que importar el archivo de estilos de tailwind una sola vez, además si lo hacemos de otro lado
next nos dará una advertencia

```
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
```

Si deseas tener un mejor control global de los estilos podrias crear un **div** o un **main** que
envuelva al componente **Component** y desde ahi dar estilos que se muestren de forma global en toda
la app

6- Instalar Tailwind-Typography:

```
yarn add  @tailwindcss/typography --dev
```

7- Configurar Tailwind-Typography dirijete a la raiz y busca el archivo: **tailwind.config.js** y
has copy/paste en plugins:

```
plugins: [
    require('@tailwindcss/typography'),
  ],
```

7- Usar tailwind typografy dirigete a **pages/posts/[slug].js**, dentro encontrarás un componente
**MDXRemote**, si no está envuelto de alguna etiqueta envuelvelo en un **article** y dale la clase
de **prose**

```
<article className="prose>
           <MDXRemote {...source} components={components} />
 </article>
```

8- Personalizar tailwind typography: Puede que algunos colores no sean muy aptos

puedes darle una clase extra, ejemplo: **internal-prose**

```
<article className="prose .internal-prose">
```

y desde el **globals.css** manejar las etiquetas que estarán dentro

```
.internal-prose h1,
.internal-prose h2,
.internal-prose h3,
.internal-prose h4,
.internal-prose h5,
.internal-prose h6 {
    @apply text-gray-300 text-3xl;
}

.internal-prose {
    @apply py-10;
}

.internal-prose * {
    @apply text-gray-400 text-lg;
}

```

otra alternativa es manejar todo con las mismas clases de tailwind:

```
<article className="prose prose-headings:text-red-600 prose-headings:text-lg">
```
