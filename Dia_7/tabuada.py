def gerar_tabuada(numero):
    print(f"Tabuada do {numero}")
    for i in range(1,11):
        resultado = numero * i
        print(f"{numero} X {i} = {resultado}")

numero = int(input("Digte um número para gerar a tabuada: "))

gerar_tabuada(numero)



    

