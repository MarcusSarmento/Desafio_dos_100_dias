# pip install PySimpleGUI

from PySimpleGUI import PySimpleGUI as sg

#layout da tela
sg.theme('Reddit')
layout = [
    [sg.Text('Usuário'), sg.Input(key='usuario')], #Linha
    [sg.Text('Senha'), sg.Input(key='senha', password_char='*')],
    [sg.Checkbox('Salvar', key='salvar')],
    [sg.Button('Entrar')]
]

#janela
janela = sg.Window('Tela de Login', layout)

#eventos de interação
while True:
    eventos, valores = janela.read()# lendo as informações fornecidas pelo usuário
    if eventos == sg.WINDOW_CLOSED:
        break

    if eventos == 'Entrar':
        if valores['usuario'] == 'Fernando' and valores['senha'] == '1234':
            sg.popup("Você logou no sistema!!!", title="Sucesso")  # Exibindo feedback na interface
        else:
            sg.popup('Usuário ou senha incorretos!', title="Erro")
