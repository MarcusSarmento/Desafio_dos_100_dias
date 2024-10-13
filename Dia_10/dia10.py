import pandas as pd
import numpy as np

#Exemplo de criação de DataFrame

data = {
    'nome': ['João', 'Maria', 'Pedro', 'Ana', 'Lucas','Carla'],
    'departamento': ['TI','RH','TI','Financeiro','TI','RH'],
    'salario': [5000, 4500, 5200, 6000, 4800, 4700],
}

df = pd.DataFrame(data)

# Filtragem dos funcionarios de TI
funcionarios_ti = df[df['departamento'] == 'TI']
print(funcionarios_ti)

#Médoa salarial
media_salarial = funcionarios_ti['salario'].mean()

# Exibindo o resultado
print("Média salarial dos funcionarios de TI: ",media_salarial)