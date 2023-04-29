import React, { useState, useEffect } from 'react';

type ProgressBarProps = {
  now: number;
  label: string;
  height: number;
  duration?: number; // adicione a propriedade duration
};

const Progress_bar = ({ now, height, duration = 5, ...props }: ProgressBarProps) => {
  const [progress, setProgress] = useState(now);

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    margin: '10px 0',
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    background: `linear-gradient(to right, green ${progress}%, red ${progress}% 100%)`,
    borderRadius: 5,
    textAlign: 'right' as 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  const startProgressBar = () => {
    const intervalDuration = (duration * 1000) / 100; // cálculo do intervalo necessário para atingir 100% de progresso dentro do tempo especificado
    let timer = setInterval(() => {
      setProgress((progress) => {
        if (progress >= 100) {
          clearInterval(timer);
          return 100;
        } else {
          return progress + 1;
        }
      });
    }, intervalDuration);
  };

  useEffect(() => {
    const childDiv = document.getElementById('child-div');
    if (childDiv) {
      childDiv.style.background = `linear-gradient(to right, green ${progress}%, #f90000 ${progress}% 100%)`;
    }
  }, [progress]);

  useEffect(() => {
    startProgressBar();
  }, []);

  return (
    <div style={Parentdiv}>
      <div id="child-div" style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
