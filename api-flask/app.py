from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime
import openrouter
import requests

app = Flask(__name__)
CORS(app)

# Configuration OpenRouter
OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
MODEL = "anthropic/claude-3-sonnet-20240229"  # Ou le modèle de votre choix sur OpenRouter

# Configuration pour les prompts
PROMPTS = {
    'ecole': """Vous êtes un assistant expert en orientation scolaire. 
    Répondez de manière claire et précise aux questions sur les écoles.
    {message}""",
    'filiere': """Vous êtes un assistant expert en orientation académique. 
    Répondez de manière claire et précise aux questions sur les filières d'études.
    {message}""",
    'conseil': """Vous êtes un assistant expert en conseil d'orientation. 
    Donnez des conseils pertinents et personnalisés pour l'orientation professionnelle.
    {message}"""
}

@app.route('/messages-history', methods=['GET'])
def handle_message_history():
    try:
        # This route is for getting message history, 
        # but the implementation is not provided in the given instructions
        pass
    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500

@app.route('/messages', methods=['POST'])
def handle_message():
    try:
        data = request.json
        message = data.get('content')
        user_id = data.get('userId')
        message_type = data.get('type')  # ecole, filiere ou conseil
        
        if not message or not message_type:
            return jsonify({
                'error': 'Message et type sont requis'
            }), 400

        # Préparer le prompt selon le type de question
        prompt = PROMPTS.get(message_type, """{message}""").format(message=message)

        # Appel à OpenRouter
        headers = {
            'Authorization': f'Bearer {OPENROUTER_API_KEY}',
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'Chatbot Orientation'
        }
        
        data = {
            'model': MODEL,
            'messages': [{'role': 'user', 'content': prompt}],
            'stream': False
        }

        try:
            response = requests.post(
                'https://openrouter.ai/api/v1/chat/completions',
                headers=headers,
                json=data
            )
            response.raise_for_status()
            
            # Extraire la réponse du modèle
            model_response = response.json()
            bot_response = model_response['choices'][0]['message']['content']
            
            return jsonify({
                'message': {
                    'content': bot_response,
                    'sender': 'bot',
                    'timestamp': datetime.now().isoformat(),
                    'type': message_type
                }
            })

        except requests.exceptions.RequestException as e:
            return jsonify({
                'error': f'Erreur lors de la communication avec OpenRouter: {str(e)}'
            }), 500
        
        return jsonify({
            'message': {
                'content': response,
                'sender': 'bot',
                'timestamp': datetime.now().isoformat(),
                'type': message_type
            }
        })

    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
