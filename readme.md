# 📚 Proyecto de Pruebas de Linters en JavaScript

## 🚀 Descripción

Este proyecto fue realizado para probar diferentes linters en JavaScript y evaluar cuál es la mejor opción según mis preferencias personales. Cada **linter** está dividido en su propia carpeta, y cada carpeta tiene una estructura similar con los archivos necesarios para realizar las pruebas.

Los linters incluidos en este proyecto son:

- **Standard**
- **Airbnb**
- **ESLint Stylistic**
- **Prettier + ESLint**

La idea es ver cómo cada linter maneja el formateo y los errores en el código, y cuál proporciona una mejor experiencia en términos de instalación, configuración y personalización.

## 🗂 Estructura del Proyecto

Cada carpeta correspondiente a un linter sigue la misma estructura básica:

[linters]/\
├── [linter-name]/\
│   ├── app.js\
│   ├── package.json\
│   ├── readme.md\
│   ├── try-it.js\
│   ├── readme\


- **app.js**: Contiene un archivo de código ya formateado con el correspondiente linter. Este archivo también incluye algunos errores intencionales que permiten ver si el linter sigue detectando los problemas.
- **try-it.js**: Un archivo con código desordenado para que el usuario vea cómo el linter realiza el formateo y cómo maneja los errores. Es útil para experimentar y entender cómo cada linter funciona, contiene las instrucciones necesarias para realizar la ejecución.
- **package.json**: Contiene las dependencias necesarias para cada linter y su configuración.
- **readme.md**: Contiene mis conclusiones tras analizar el proceso de instalación, integración y ejecución del correspondiente linter.

## 📝 Instrucciones

En cada archivo **try-it.js** encontrarás las instrucciones para realizar el formateo con cada linter.

## 💡 Opinión Personal

Tras realizar estas pruebas, mis linters de preferencia fueron **ESLint Stylistic** y **Airbnb**:

- **ESLint Stylistic** me parece muy sencillo en términos de instalación y personalización, lo cual lo hace ideal para cualquier tipo de proyecto, sobre todo para aquellos que buscan algo fácil de configurar sin complicaciones.
- **Airbnb**, aunque más complejo de configurar, ofrece una robustez superior en la detección de errores en comparación con el resto de linters, lo que lo convierte en una excelente opción para proyectos grandes o aquellos que buscan una mayor rigurosidad en la calidad del código.

## 🛠 Recomendaciones

- Si buscas algo fácil de instalar y personalizar rápidamente, **ESLint Stylistic** es una excelente opción.
- Si necesitas una herramienta más robusta para garantizar la calidad del código en proyectos grandes, recomiendo **Airbnb**.
- Para proyectos donde no se requierá mucha personalización, **Standard** me parece muy conveniente. También se puede considerar **Neostandard**, una alternativa a **Standard** más flexible que actualmente está ganando mucha popularidad.
