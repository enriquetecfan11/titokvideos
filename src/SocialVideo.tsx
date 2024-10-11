import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  staticFile,
} from 'remotion';
import { FPS } from './constants';

interface SlideData {
  image: string;
  sentence: string;
}

interface Props {
  data: SlideData[];
}

const Slide: React.FC<{ data: SlideData }> = ({ data }) => {
  const frame = useCurrentFrame();

  // Duración de la diapositiva basada en la cantidad de palabras
  const totalWords = data.sentence.split(' ').length;
  const slideDuration = totalWords * 20;

  // Dividir la frase en pares de palabras
  const words = data.sentence.split(' ');
  const wordPairs = [];
  for (let i = 0; i < words.length; i += 2) {
    wordPairs.push(words.slice(i, i + 2).join(' '));
  }

  return (
    <AbsoluteFill>
      <Img
        src={data.image} // Utiliza la imagen proporcionada en los datos
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 40,
        }}
      >
        <h1 style={{ transform: `scale(${interpolate(frame % 60, [0, 30, 59], [1, 1.1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`, transition: 'transform 0.3s ease', 
            fontSize: 150,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            maxWidth: '80%',
            lineHeight: '1.2',
            wordWrap: 'break-word',
          }}
        >
          {wordPairs.map((pair, index) => {
            // Mostrar cada par de palabras con un pequeño retraso y efecto de opacidad
            const pairStartFrame = index * 30;
            const pairOpacity = interpolate(frame - pairStartFrame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
            return (
              <span
                key={index}
                style={{
                  opacity: pairOpacity,
                  marginRight: 10,
                  display: 'block',
                }}
              >
                {pair}
              </span>
            );
          })}
        </h1>
        <h2
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            maxWidth: '80%',
            lineHeight: '1.2',
            wordWrap: 'break-word',
            opacity: interpolate(frame % 120, [0, 15, 60, 75], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          }}
        >
          Tu frase diaria motivacional
        </h2>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SocialVideo: React.FC<Props> = ({ data }) => {
  let accumulatedFrames = 0;

  return (
    <AbsoluteFill>
      {data.map((slide, index) => {
        const totalWords = slide.sentence.split(' ').length;
        const slideDuration = totalWords * 30; // Incrementar la duración de cada diapositiva para permitir más tiempo de lectura
        const from = accumulatedFrames;
        accumulatedFrames += slideDuration;

        return (
          <Sequence
            key={index}
            from={from}
            durationInFrames={slideDuration}
          >
            <Slide data={slide} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};