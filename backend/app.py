from flask import Flask
from flask import request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId
import pandas as pd # openpyxl is required

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/chartOfAccounts'
mongo = PyMongo(app)


CORS(app)


db = mongo.db.accounts


# Get all
@app.route('/accounts', defaults={'page': 1})
@app.route('/accounts/', defaults={'page': 1})
@app.route('/accounts/<page>', methods=['GET'])
def getAccounts(page):
    limits = 2
    pages = int(page) * limits - limits
    accounts = []
    for acc in db.find().skip(pages).limit(limits):
        accounts.append({
        "_id": str(ObjectId(acc['_id'])),
        "Account": acc['Account'],
        "AcctType": acc['AcctType'],
        "Description": acc['Description'],
        "Department": acc['Department'],
        "TypicalBal": acc['TypicalBal'],
        "DebitOffset": acc['DebitOffset'],
        "CreditOffset": acc['CreditOffset'],
    })
    return jsonify({"Result": "Success", "Payload": accounts}), 200


# Get by Id
@app.route('/accounts/<id>', methods=['GET'])
def getAccount(id):
    acc = db.find_one({'_id': ObjectId(id)})
    account = {
        "_id": str(ObjectId(acc['_id'])),
        "Account": acc['Account'],
        "AcctType": acc['AcctType'],
        "Description": acc['Description'],
        "Department": acc['Department'],
        "TypicalBal": acc['TypicalBal'],
        "DebitOffset": acc['DebitOffset'],
        "CreditOffset": acc['CreditOffset'],
    }
    return jsonify({"Result": "Success", "Payload": account}), 200


# Post
@app.route('/accounts', methods=['POST'])
def createAccount():
    xlsxfile = request.files['file']
    data = pd.read_excel(xlsxfile)
    # getting al the data into a dict
    dataD = data.to_dict()
    for i in dataD['Account']:
        if(dataD['Account'][i] == dataD['Account'][i]):
            acc = {}
            for d in dataD:
                if(dataD[d][i] == dataD[d][i]):
                    acc[d] = dataD[d][i]
                else:
                    acc[d] = ""
            db.insert(acc)
    return jsonify({"Result": "Success"}), 201


# Update
@app.route('/accounts/<id>', methods=['PUT'])
def updateAccount(id):
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        "Account": request.json['Account'],
        "AcctType": request.json['AcctType'],
        "Description": request.json['Description'],
        "Department": request.json['Department'],
        "TypicalBal": request.json['TypicalBal'],
        "DebitOffset": request.json['DebitOffset'],
        "CreditOffset": request.json['CreditOffset'],
    }})
    return jsonify({'Result': 'Success'}), 200


# Delete
@app.route('/accounts/<id>', methods=['DELETE'])
def deleteAccount(id):
  db.delete_one({'_id': ObjectId(id)})
  return jsonify({'Result': 'Success'}), 200


if __name__ == "__main__":
    app.run(debug=True)