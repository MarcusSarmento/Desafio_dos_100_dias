import random
import string

def gerar_senha(tamanho=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))

    return senha

if __name__ == "__main__":
    tamanho_da_senha=16
    senha_aleatoria = gerar_senha(tamanho_da_senha)
    print(f"Senha gerada: {senha_aleatoria}")