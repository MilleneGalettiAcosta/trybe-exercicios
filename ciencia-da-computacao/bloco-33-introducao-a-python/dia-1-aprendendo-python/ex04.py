# Crie uma função que receba uma lista de nomes
# Retorne o nome com a maior quantidade de caracteres.

def biggest_name(list):
    biggest_name = list[0]
    for name in list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name
