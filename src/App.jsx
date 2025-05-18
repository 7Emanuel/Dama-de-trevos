import { useState } from 'react';
import './App.css';
import primeiraImagem from './imagens/primeira-imagem.png';
import segundaImagem from './imagens/segunda-imagem.png';
import terceiraImagem from './imagens/terceira-imagem.png';
import quartaImagem from './imagens/quarta-imagem.png';
import quintaImagem from './imagens/quinta-imagem.png';
import sextaImagem from './imagens/sexta-imagem.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="card center-text">
        <h1 style={{color: "white", marginBottom: "0.3rem"}}>nada para fazer</h1>
        <h1 style={{color: "white", marginTop: "0" }}>fiz isso enquanto estava entediado na aula de web</h1>

        <button onClick={toggleModal} className="btn">
          Ver Galeria
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{color: "black", marginBottom: "0.3rem"}}>Galeria de Imagens de</h2>
            <h2 style={{color: "black", marginTop: "0"}}>Maria Eduarda</h2>
            <h2 style={{color: "black", marginTop: "0"}}>Feliz aniversario atrasado 😅</h2>
            <div className="gallery">
  <div className="gallery-col">
    <img src={primeiraImagem} alt="Imagem 1" className="rotated1" />
    <br />
    <img src={terceiraImagem} alt="Imagem 3" className="rotated3" />
    <br />
    <img src={quintaImagem} alt="Imagem 5" className="rotated5" />
  </div>
  <div className="gallery-col">
    <img src={segundaImagem} alt="Imagem 2" className="rotated2" />
     <br />
    <img src={quartaImagem} alt="Imagem 4" className="rotated4" />
    <br />
    <img src={sextaImagem} alt="Imagem 6" className="rotated6" />
  </div>
</div>

            <button onClick={toggleModal} className="btn" style={{ marginTop: '20px' }}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
