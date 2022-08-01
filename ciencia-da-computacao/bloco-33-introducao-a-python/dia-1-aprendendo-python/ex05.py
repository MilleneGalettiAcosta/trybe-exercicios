# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede(em m²).

def paint_costs(area):
    lata = 80
    litro_quadrado = area / 3
    latas_req = litro_quadrado // 18
    if litro_quadrado % 18:
        latas_req += 1
    return latas_req, latas_req * lata
