from flask import Blueprint
from flask_cors import CORS, cross_origin
from flask import request, jsonify
from api.controllers import Accounts

accounts = Blueprint('routes_accounts', __name__)

@accounts.route('/', methods=['GET'])
def getAccounts():
    args = request.args
    args = args.to_dict()
    page = args['page']
    res = Accounts.getAccounts(page)
    return jsonify(res), res["status"]

@accounts.route('/<id>', methods=['GET'])
def getAccount(id):
    res = Accounts.getAccount(id)
    return jsonify(res), res["status"]

@accounts.route('/description/', methods=['GET'])
def getByDescription():
    args = request.args
    args = args.to_dict()
    page = args['page']
    desc = args['desc']
    res = Accounts.getByDescription(page,desc)
    return jsonify(res), res["status"]

@accounts.route('/account/', methods=['GET'])
def getByAccount():
    args = request.args
    args = args.to_dict()
    page = args['page']
    acc = args['acc']
    res = Accounts.getByAccount(page,acc)
    return jsonify(res), res["status"]

@accounts.route('/', methods=['POST'])
def createAccount():
    xlsxfile = request.files['file']
    res = Accounts.createAccount(xlsxfile)
    return jsonify(res), res["status"]

@accounts.route('/<id>', methods=['PUT'])
def updateAccount(id):
    data = {
        "Account": request.json['Account'],
        "AcctType": request.json['AcctType'],
        "Description": request.json['Description'],
        "Department": request.json['Department'],
        "TypicalBal": request.json['TypicalBal'],
        "DebitOffset": request.json['DebitOffset'],
        "CreditOffset": request.json['CreditOffset'],
    }
    res = Accounts.updateAccount(id,data)
    return jsonify(res), res["status"]

@accounts.route('/<id>', methods=['DELETE'])
def deleteAccount(id):
    res = Accounts.deleteAccount(id)
    return jsonify(res), res["status"]
