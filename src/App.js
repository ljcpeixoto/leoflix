import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function renderCategoria(categoria) {
    return <Carousel
            category={ categoria }
        />
}

function App() {
  return (
    <div style={{ background: "#141414"}}>

        <Menu />

        <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription={"O que é Front-end ? Trabalhando na área"}
        />

        <Carousel
            ignoreFirstVideo
            category={ dadosIniciais.categorias[0] }
        />

        { dadosIniciais.categorias.slice(1).map(renderCategoria) }

    </div>
  );
}

export default App;
