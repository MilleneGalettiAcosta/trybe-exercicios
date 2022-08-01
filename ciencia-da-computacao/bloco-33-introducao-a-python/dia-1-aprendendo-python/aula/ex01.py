# REPL - terminal python3
# help(busca)
# dir(tipo de dados)

def analyze(text):
    # ... ou pass (caso você não implemente nada)
    report = ""
    count = len(text.split())

    report += f"Número de plavras é {count} "
    char_counter = dict()
    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1

    report += f"Ocorrências por char: {char_counter}"

    return report


text_to_analyze = (
    "Seremos a prieira escolha para quem quer alcançar profissões"
    "Nós trabalhamos duro todos os dias para que as"
    "pessoas tenham a oportunidade de trilhar essas carreiras."
)

print(analyze(text_to_analyze))
