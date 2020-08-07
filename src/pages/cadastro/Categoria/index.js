import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valorInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState(valorInicial);

  function setValor(chave, valor) {
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor,
    });
  }

  function onChangeValor(info) {
    setValor(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function handleSubmit(infoDoForm) {
    infoDoForm.preventDefault();
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria(valorInicial);
  }

  useEffect(() => {
    const URL_BASE = window.location.hostname.includes('localhost')
      ? 'http://localhost:3001'
      : 'http://leoflix-server.herokuapp.com';
    const URL = `${URL_BASE}/categorias`;

    fetch(URL).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Página de Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={novaCategoria.nome}
            onChange={onChangeValor}
          />

          <FormField
            label="Descrição"
            name="descricao"
            as="textarea"
            value={novaCategoria.descricao}
            onChange={onChangeValor}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={novaCategoria.cor}
            onChange={onChangeValor}
          />

        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
