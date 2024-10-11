# Remotion Titok Videos

Este proyecto utiliza [Remotion](https://www.remotion.dev/) para generar un video destinado a TikTok. El video está diseñado en formato vertical (1080x1920) para ajustarse a la plataforma.

## Características

1. **Generación de Videos**: Se utiliza Remotion para generar un video con secuencias de frases motivacionales que aparecen y desaparecen con un efecto de animación.
2. **Formato Vertical**: El video se configura específicamente para ser compatible con plataformas como TikTok, con una resolución de 1080x1920.
3. **Datos Dinámicos**: Los datos de las frases son proporcionados desde un archivo JSON (`<span>videoData.json</span>`). Cada frase tiene una duración ajustada para asegurar suficiente tiempo para ser leída.
4. **Animaciones de Aparición y Salida**: Se han añadido animaciones de opacidad y de escalado para hacer que las frases aparezcan gradualmente y se mantengan visibles durante la duración de cada diapositiva.

## Próximos Pasos

* **Personalización de Animaciones**: Añadir más opciones de animación para las frases y el fondo.
* **Audio de Fondo**: Incluir música o efectos de sonido para mejorar la experiencia del usuario.
* **Automatización del Proceso**: Integrar herramientas para automatizar la generación de videos basados en diferentes conjuntos de datos JSON.
