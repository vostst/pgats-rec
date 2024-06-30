function pesquisarCampo(campos, pesquisa) {
    if (!campos || campos.length === 0) {
        return "Informe a lista de campos";
    }

    if (!pesquisa) {
        return "Informe a pesquisa";
    }

    let resultados = '';
    let encontrouCampo = false;

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].identificador === pesquisa) {
            if (resultados !== '') {
                resultados += ',';
            }
            resultados += campos[i].texto;
            encontrouCampo = true;
        }
    }

    if (!encontrouCampo) {
        return "Nenhum campo encontrado";
    }

    return resultados;
}

module.exports = { 
    pesquisarCampo 
};
