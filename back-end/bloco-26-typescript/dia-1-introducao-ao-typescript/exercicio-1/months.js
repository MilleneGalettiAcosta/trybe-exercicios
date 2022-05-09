var months;
(function (months) {
    months["JAN"] = "Janeiro";
    months["FEV"] = "Fevereiro";
    months["MAR"] = "Mar\u00E7o";
    months["ABR"] = "Abril";
    months["MAI"] = "Maio";
    months["JUN"] = "Junho";
    months["JUL"] = "Julho";
    months["AGO"] = "Agosto";
    months["SET"] = "Setembro";
    months["OUT"] = "Outubro";
    months["NOV"] = "Novembro";
    months["DEZ"] = "Dezembro";
})(months || (months = {}));
console.log("Estamos no m\u00EAs de ".concat(months.MAI));
