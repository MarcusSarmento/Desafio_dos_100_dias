#Exibindo Variáveis do Backend no Frontend com Flask 

from flask import Flask, url_for, render_template

#Inicializando
app = Flask(__name__)

#Rotas
@app.route('/')
def ola_mundo():
    titulo = "Gestão de Alunos"
    alunos = [
        {"nome": "Zezin", "vinculo": True},
        {"nome": "Pedrin", "vinculo": True},
        {"nome": "Jorgin", "vinculo": False}
    ]

    return render_template('index.html', titulo=titulo, alunos=alunos)

@app.route('/sobre')
def pagina_sobre():
    return """
    <strong>Aluno Codi Academy</strong>: siga nosso canal do
    <a href="https://www.youtubee.com/@CodiAcademyTV"> YouTube </a>
"""


#Rodando Projeto
app.run(debug=True)

