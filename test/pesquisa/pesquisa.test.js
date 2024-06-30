const { pesquisarCampo } = require("../../src/pesquisa/pesquisa")
const assert = require("node:assert");

describe('Pesquisa', () => {
    describe('#pesquisarCampo', () => {
        it('lista de campos não foi informada', () => {
            const resultado = pesquisarCampo(undefined, "campo1");
            
            assert.equal(resultado, "Informe a lista de campos");
        });

        it('lista de campos está vazia', () => {
            const resultado = pesquisarCampo([], "campo1");
            
            assert.equal(resultado, "Informe a lista de campos");
        });

        it('a pesquisa não foi informada', () => {
            const campos = [
                { nome: "Nome", texto: "Julio de Lima", identificador: "campoNome" },
                { nome: "E-mail", texto: "iam@juliodelima.com.br", identificador: "campoEmail"  },
                { nome: "Telefone", texto: "+55 11 99999-9999", identificador: "campoTelefone"  }
            ];

            const resultado = pesquisarCampo(campos, undefined);
            
            assert.equal(resultado, "Informe a pesquisa");
        });

        it('não encontrou o campo', () => {
            const campos = [
                { nome: "Nome", texto: "Julio de Lima", identificador: "campoNome" },
                { nome: "E-mail", texto: "iam@juliodelima.com.br", identificador: "campoEmail"  },
                { nome: "Telefone", texto: "+55 11 99999-9999", identificador: "campoTelefone"  }
            ];

            const resultado = pesquisarCampo(campos, "campoCpf");
            
            assert.equal(resultado, "Nenhum campo encontrado");
        });

        it('encontrou o campo', () => {
            const campos = [
                { nome: "Nome", texto: "Julio de Lima", identificador: "campoNome" },
                { nome: "E-mail", texto: "iam@juliodelima.com.br", identificador: "campoEmail"  },
                { nome: "Telefone", texto: "+55 11 99999-9999", identificador: "campoTelefone"  }
            ];
            
            const resultado = pesquisarCampo(campos, "campoEmail");

            assert.equal(resultado, "iam@juliodelima.com.br");
        });

        it('concatenou os campos com o mesmo ID', () => {
            const campos = [
                { nome: "Nome", texto: "Julio de Lima", identificador: "campoNome" },
                { nome: "E-mail", texto: "iam@juliodelima.com.br", identificador: "campoEmail"  },
                { nome: "Telefone", texto: "+55 11 99999-9999", identificador: "campoTelefone"  },
                { nome: "Telefone de Recado", texto: "+55 11 88888-8888", identificador: "campoTelefone"  }
            ];

            const resultado = pesquisarCampo(campos, "campoTelefone");

            assert.equal(resultado, "+55 11 99999-9999,+55 11 88888-8888");
        });
    });
});