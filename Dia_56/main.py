def contar_palavras(nome_arquivo):
    try:
        with open(nome_arquivo, 'r', encoding='utf-8') as arquivo:
            conteudo = arquivo.read()
            palavras = conteudo.split()
            num_palavras = len(palavras)
            return num_palavras
    except FileNotFoundError:
        print(f"O arquivo {nome_arquivo} não foi encontrado")
        return 0
    
    except Exception as e:
        print(f"Ocorreu um erro no arquivo: {e}")
        return 0

def main():
    nome_arquivo = input("Digite o nome do arquivo a ser lido: ")
    num_palavras = contar_palavras(nome_arquivo)
    print(f"O número de palavras no arquivo é: {num_palavras}")

if __name__ == '__main__':
    main()