var formatarMoeda = require('./utils.js')

module.exports = function gerarFaturaStr(fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;

    for (let apre of fatura.apresentacoes)
        faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;

    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
}

/*
function gerarFaturaHTML(fatura, calc) {
    let faturaStr = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;

    for (let apre of fatura.apresentacoes)
        faturaStr += `<li> ${calc.repo.getPeca(apre).nome}: ${calc.formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;

    faturaStr += `</ul>\n<p> Valor total: ${calc.formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
    faturaStr += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n`;
    return faturaStr + `</html>`;
}
*/
