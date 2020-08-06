import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';

function renderCategoria(categoria) {
  return (
    <Carousel
      key={categoria.titulo}
      category={categoria}
    />
  );
}

function Home() {
  return (
    <div style={{ background: '#141414' }}>

      <PageDefault>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="O que é Front-end ? Trabalhando na área"
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        { dadosIniciais.categorias.slice(1).map(renderCategoria) }

      </PageDefault>

    </div>
  );
}

export default Home;
