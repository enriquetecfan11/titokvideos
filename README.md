# Proyecto de Video para TikTok con Remotion

Este proyecto utiliza [Remotion](https://www.remotion.dev/) para generar un video destinado a TikTok. El video está diseñado en formato vertical (1080x1920) para ajustarse a la plataforma.

## Características

1. **Generación de Videos**: Se utiliza Remotion para generar un video con secuencias de frases motivacionales que aparecen y desaparecen con un efecto de animación.
2. **Formato Vertical**: El video se configura específicamente para ser compatible con plataformas como TikTok, con una resolución de 1080x1920.
3. **Datos Dinámicos**: Los datos de las frases son proporcionados desde un archivo JSON (`<span>videoData.json</span>`). Cada frase tiene una duración ajustada para asegurar suficiente tiempo para ser leída.
4. **Animaciones de Aparición y Salida**: Se han añadido animaciones de opacidad y de escalado para hacer que las frases aparezcan gradualmente y se mantengan visibles durante la duración de cada diapositiva.
5. 

## Modificaciones Realizadas

1. **Formato Vertical**: Se configuró la composición para una resolución de 1080x1920 para asegurar el formato vertical adecuado.
2. **Duración de las Diapositivas**: Cada diapositiva tiene una duración proporcional al número de palabras de la frase, con tiempo adicional para la animación de salida.
3. **Efecto de Aparición y Salida**: Se añadió una interpolación de opacidad para las frases y subtítulos, haciendo que las frases aparezcan gradualmente y desaparezcan al final de cada secuencia.
4. **Efecto de Escalado**: Se añadió una animación de escala al título principal (`<span><h1></span>`) para dar un efecto visual dinámico.
5. **Animación en **`<span><strong><h2></strong></span>`: Se añadió una animación de parpadeo al subtítulo (`<span><h2></span>`) para hacer que aparezca y desaparezca varias veces durante cada secuencia.

## Archivos Involucrados

* `<span>RemotionVideo.tsx</span>`: Componente principal que define la composición y duración del video.
* `<span>SocialVideo.tsx</span>`: Componente que maneja las diapositivas y las animaciones para cada frase.
* `<span>videoData.json</span>`: Archivo JSON que contiene las frases que se muestran en el video.
* `<span>imagen.jpg</span>`: Imagen utilizada como fondo en todas las diapositivas.

## Ejemplos de Animación

* **Subtítulo Parpadeante**: El `<span><h2></span>` tiene una animación de opacidad que hace que aparezca y desaparezca periódicamente durante la secuencia.
* **Escalado del Título**: El `<span><h1></span>` tiene un efecto de escalado suave que le da un aspecto de bombeo, haciéndolo más atractivo visualmente.

## Consideraciones

* La duración total de cada diapositiva depende del número de palabras en la frase. Cada palabra tiene un tiempo asignado, y se añade tiempo adicional para asegurar una transición suave de salida.
* Se han realizado ajustes para que todas las animaciones y efectos se sincronicen correctamente, garantizando que cada frase sea legible y atractiva visualmente.

## Próximos Pasos

* **Personalización de Animaciones**: Añadir más opciones de animación para las frases y el fondo.
* **Audio de Fondo**: Incluir música o efectos de sonido para mejorar la experiencia del usuario.
* **Automatización del Proceso**: Integrar herramientas para automatizar la generación de videos basados en diferentes conjuntos de datos JSON.
