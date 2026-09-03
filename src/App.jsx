import React, { useState, useEffect } from "react";
import portadaImg from "./img/portada.jpg";
import cumpleAudio from "./audio/cumple.mp3";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const audio = new Audio(cumpleAudio);

  const handleClick = () => {
    setOpened(true);
    setShowBalloons(true);

    audio.play();

    // Confeti
    for (let i = 0; i < 150; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * window.innerWidth + "px";
      particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 2500);
    }
  };

  // Globos flotando
  useEffect(() => {
    if (!showBalloons) return;
    const balloons = [];
    for (let i = 0; i < 12; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = `${Math.random() * 90}vw`;
      balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
      document.body.appendChild(balloon);
      balloons.push(balloon);
      setTimeout(() => balloon.remove(), 9000);
    }
  }, [showBalloons]);

  return (
    <div className="container">
      {!opened ? (
        <div className="portada">
          <img src={portadaImg} alt="Portada" />
          <h1>🎂 ¡Feliz cumpleaños, Jeni! 🎂</h1>
          <button onClick={handleClick}>¡Toca aquí! 📩</button>
        </div>
      ) : (
        <div className="carta-wrapper">
          <div className="carta animate-open">
            <h2>Querida Jeni,</h2>
            <p>
              🎂✨ Qué bonito ha sido coincidir contigo y, con el tiempo, descubrir a la gran persona que eres.
Admiro mucho esa forma que tienes de enfrentar la vida, de seguir adelante incluso cuando las cosas no son fáciles, y de mantener siempre tus valores y tu esencia.</p> 
Deseo de corazón que este nuevo año te traiga muchos motivos para sonreír, nuevos desafíos y oportunidades para seguir creciendo, no solo profesionalmente, sino también como persona. 
<p>Porque tienes ese espíritu que te impulsa a seguir avanzando y a querer ser siempre una mejor versión de ti misma. Espero que nunca pierdas esa fuerza y esa esencia tan tuya. </p>  
Que tengas un cumpleaños hermoso y que venga un año aún mejor.
          </div>

          {/* Destellos mágicos */}
          <div className="sparks-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="spark"></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
