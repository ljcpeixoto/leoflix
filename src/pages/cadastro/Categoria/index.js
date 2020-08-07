import React, { useState } from 'react';
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
    console.log('Tentou enviar form: ', infoDoForm);
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria(valorInicial);
  }

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

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={categoria + indice}>
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
