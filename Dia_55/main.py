# Analisador de sentimento

# pip list
# pip install textblob 
# python -m textblob.download_corpora
# pip install deep_translator

from textblob import TextBlob
from deep_translator import GoogleTranslator

def translate_to_english(text):
    trasnlator = GoogleTranslator(source="pt", target="en")
    translation = trasnlator.translate(text)
    return translation

def analyze_sentiment(text):
    text_in_english = translate_to_english(text)
    blob = TextBlob(text_in_english)
    sentiment = blob.sentiment
    return sentiment

texto = "Eu amo programar em python. A linguagem é versátil, bonita, eficaz e amável"
sentiment = analyze_sentiment(texto)
print("Texto:  {texto}\nSentiment: {sentiment}")

#VADER
#BERTlimbau