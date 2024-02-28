import React from 'react';
import "../styles/Gallery.css"


const fotos = [
  { id: 1, titulo: 'Foto 1', url: 'https://via.placeholder.com/700' },
  { id: 2, titulo: 'Foto 2', url: 'https://via.placeholder.com/300' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/500' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/300' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/100' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/900' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/600' },
  { id: 3, titulo: 'Foto 3', url: 'https://via.placeholder.com/300' },
  // Agrega más fotos según sea necesario
];

const GalleryPage  = () => {
  return (
    <div className="galeria">
      {fotos.map((foto) => (
        <div key={foto.id} className="foto-contenedor">
          <img src={foto.url} alt={foto.titulo} className="foto" />
          <div className="titulo">{foto.titulo}</div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;