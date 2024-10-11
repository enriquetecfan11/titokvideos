import React from 'react';
import { Composition } from 'remotion';
import { SocialVideo } from './SocialVideo';
import slidesDataJson from './videoData.json';
import imagenLocal from '../assets/imagen.jpg';
import { FPS } from './constants';

// Modificar la propiedad de imagen importando la imagen en el código
const slidesData = slidesDataJson.map((slide) => ({
  ...slide,
  image: imagenLocal,
}));

// Calcular la duración total de la secuencia para ajustar la salida de cada frase
const totalDuration = slidesData.reduce((acc, slide) => {
  const wordsCount = slide.sentence.split(' ').length;
  const slideDuration = wordsCount * 30 + 45; // Duración ajustada considerando el tiempo de aparición y salida
  return acc + slideDuration;
}, 0);

// Añadir animación CSS para fade in/out
const styles = `
@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
`;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <Composition
        id="SocialVideo"
        component={SocialVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{
          data: slidesData,
        }}
      />
    </>
  );
};