import requests
from bs4 import BeautifulSoup

# pip install requests
# pip install BeautifulSoup

url = 'https://g1.globo.com/'


response = requests.get(url)

if response.status_code == 200:
    soup =  BeautifulSoup(response.text, 'html.parser')
    title = soup.title.string
    print('Título da página', title)

    links = soup.find_all('a')

    for link in links:
        print('Link encontrado', link.get('href'))
    else:
        print('Falha ao acessar a página: ',response.status_code)    