#pip install flask flask-cors pytubefix 

from pytubefix import YouTube
from pytubefix.cli import on_progress

from flask import Flask,jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def download():
    # recebe a url do video
    data = request.json
    url = data['url']

    yt = YouTube(url, on_progress_callback=on_progress)

    print(yt.title)

    #selecionar o stream de audio
    ys = yt.stream.get_audio_only()

    #baixa o audio 
    ys.download(output_path='./video/')

    #retorno da url recebida
    return jsonify({"url": url})

if __name__ == "__main__":
    app.run(debug=True, port=8081)