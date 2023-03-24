"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frota_1 = require("./frota");
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro.marca === marca;
    });
}
console.log(buscarCarrosPorMarca(frota_1.frota, "Chevrolet"));
//# sourceMappingURL=index.js.map