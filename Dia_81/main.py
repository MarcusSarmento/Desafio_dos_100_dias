#Instalando e Iniciando Flask
# pip install flask

from flask import Flask

#Inicializando
app = Flask(__name__)

#Rotas
@app.route('/')
def ola_mundo():
    return "Olá mundo!!"

#Rodando Projeto
app.run(debug=True)

