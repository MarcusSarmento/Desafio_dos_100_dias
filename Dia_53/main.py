# Recebo os dados do usuario

principal = float(input("Digite o valor principal: "))
taxa_juros = float(input("Digite a taxa de juros anuals (%): "))
anos = int(input("Digite a quantidade de anos: "))

# Função que calcula o juros
def calcula_juros_composto(principal, taxa_juros, anos):
    montante = principal * (1+(taxa_juros/100)) ** anos
    return montante

montante = calcula_juros_composto(principal,taxa_juros,anos)
print(f"O montante após {anos} anos será: {montante:.2f}")
