def adicao(x,y):
    return x+y
def subitracao(x,y):
    return x-y
def multiplicacao(x,y):
    return x*y
def divisao(x,y):
    return x/y

def calculadora():
    while(True):
        x=int(input("Digite o primeiro número: "))   
        y=int(input("Digite o segundo número: "))


        print(f'A adição de {x} e {y} é: {adicao}')
        print(f'A subitração de {x} e {y} é: {subitracao}')
        print(f'A multiplicação de {x} e {y} é: {multiplicacao}')
        if y != 0:
            print(f'A divisão de {x} e {y} é: {divisao}')    
        else:
            print("Não é permitido divisão por 0")
        

        continuar = input("Deseja fazer outra operalção? (s/n)")
        if continuar == "n":
            print("Calculadora encerrada")
            break
calculadora()