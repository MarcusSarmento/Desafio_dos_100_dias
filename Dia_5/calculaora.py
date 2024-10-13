def adicao(x,y):
    return x+y
def subitracao(x,y):
    return x-y
def multiplicacao(x,y):
    return x*y
def divisao(x,y):
    return x/y

def calculadora():
    print("Selecione a operação: ")
    print("1.Adição")
    print("2.subtração")
    print("3.Multiplicação")
    print("4.Divisão")

while True:
    escolha= input("Escolha(1/2/3/4) ")
    if escolha in ('1','2','3','4'):
        x=int(input("Digite o primeiro número: "))   
        y=int(input("Digite o segundo número: "))
        if escolha =='1':
            print("Resultado: ",adicao(x,y)) 
        if escolha =='2':
            print("Resultado: ",subitracao(x,y))
        if escolha =='3':
            print("Resultado: ",multiplicacao(x,y))
        if escolha =='4':
            if y != 0:
                print("Resultado: ",divisao(x,y))    
            else:
                print("Não é permitido divisão por 0")
        else:
            print("Escolha inválida")
        continuar = input("Deseja fazer outra operalção? (s/n)")
        if continuar == "n":
            print("Calculadora encerrada")
            break
calculadora()