import { TFrota, frota } from "./frota"

function buscarCarrosPorMarca(frota: TFrota[], marca: string) : TFrota[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter((carro: TFrota) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota, "Chevrolet"))