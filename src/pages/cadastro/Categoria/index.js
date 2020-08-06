import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const valorInicial = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }

    const [categorias, setCategorias] = useState([]);
    const [novaCategoria, setNovaCategoria] = useState(valorInicial);

    function setValor(chave, valor) {
        setNovaCategoria({
            ...novaCategoria,
            [chave]: valor
        })
    }

    function onChangeValor(info) {
        const {getAttribute, value} = info.target;
        setValor(
            getAttribute('name'),
            value);
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
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            name="nome"
                            value={novaCategoria.nome}
                            onChange={onChangeValor}
                        />
                    </label>

                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={novaCategoria.descricao}
                            onChange={onChangeValor}
                        />
                    </label>

                    <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={novaCategoria.cor}
                            onChange={onChangeValor}
                        />
                    </label>

                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                        return <li key={categoria + indice}>
                            {categoria.nome}
                        </li>
                    })
                }
            </ul>


            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
