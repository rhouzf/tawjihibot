# API Flask pour le Chatbot

Cette API Flask sert d'intermédiaire entre le frontend React et le modèle LLM.

## Installation

1. Créez un environnement virtuel Python :
```bash
python -m venv venv
source venv/bin/activate  # Sur Windows : venv\Scripts\activate
```

2. Installez les dépendances :
```bash
pip install -r requirements.txt
```

## Configuration

Créez un fichier `.env` dans le dossier de l'API avec les variables suivantes :
```
OPENROUTER_API_KEY=votre_clé_api_openrouter
# Modèle OpenRouter par défaut (modifiez selon vos besoins)
MODEL=anthropic/claude-3-sonnet-20240229
```

## Démarrage

Pour démarrer l'API :
```bash
python app.py
```

L'API sera accessible sur `http://localhost:5000`

## Endpoints

- `POST /api/chatbot/messages`
  - Corps de la requête :
    ```json
    {
      "content": "Votre message",
      "userId": "ID de l'utilisateur",
      "type": "ecole|filiere|conseil"
    }
    ```
  - Réponse :
    ```json
    {
      "message": {
        "content": "Réponse du bot",
        "sender": "bot",
        "timestamp": "2023-06-09T17:03:27+01:00",
        "type": "ecole|filiere|conseil"
      }
    }
    ```
