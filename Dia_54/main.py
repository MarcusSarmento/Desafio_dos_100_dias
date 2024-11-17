# receber do usoário o texto

texto = input("Digite seu texto: ")

def contar_palavras(texto):
    palavras = texto.split()
    return len(palavras) 

def contar_feases(texto):
    frases = texto.count(".") + texto.count("?") + texto.count("!") 
    return frases

def contar_caracteres(texto):
    return len(texto)

palavras = contar_palavras(texto) 
frases = contar_feases(texto)
caracteres = contar_caracteres(texto)

print(f"Número de palavras: {palavras}")
print(f"Número de frases: {frases}")
print(f"Númerp de caracteres: {caracteres}")
