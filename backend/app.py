from flask import Flask
from flask import request, jsonify, Blueprint
from flask_pymongo import PyMongo
from flask_cors import CORS
from dotenv import load_dotenv
import os

from api.routes.Accounts import accounts


app = Flask(__name__)


load_dotenv()   

PORT = os.getenv('PORT')
HOST = os.getenv('HOST')



public_routes = Blueprint('public', __name__)

CORS(accounts)  


@app.route("/")
def root():
    print("Welcome")
    result = {'message': 'Success', 'status': '200', 'payload': []}
    return jsonify(result), 200


app.register_blueprint(accounts, url_prefix="/accounts")





if __name__ == "__main__":
    app.run(debug=True, port=PORT, host=HOST)