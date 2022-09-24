from flask import jsonify
from bson import ObjectId
from config.connection import client
import pandas as pd # openpyxl is required
mongo = client['chartOfAccounts']
db = mongo['accounts']


def getAccounts(page):
    limits = 10
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
    return {"payload": accounts, "status": 200}

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
    return {"payload": account, "status": 200}

def getByDescription(page,desc):
    limits = 10
    pages = int(page) * limits - limits
    data = []
    for acc in db.find():
        if desc.lower() in acc['Description'].lower():
            data.append({
            "_id": str(ObjectId(acc['_id'])),
            "Account": acc['Account'],
            "AcctType": acc['AcctType'],
            "Description": acc['Description'],
            "Department": acc['Department'],
            "TypicalBal": acc['TypicalBal'],
            "DebitOffset": acc['DebitOffset'],
            "CreditOffset": acc['CreditOffset'],
        })
    accounts = []
    dataF = len(data)
    if(dataF>(pages+10)):
        j=0
        for i in range(pages, pages+10):
            accounts.append(data[i])
    elif((dataF + 10)>(pages+10)):
        ran = dataF - pages
        for i in range(pages, pages+ran):
            accounts.append(data[i])
    return {"payload": accounts, "status": 200}

def getByAccount(page, account):
    limits = 10
    pages = int(page) * limits - limits
    data = []
    for acc in db.find():
        if account.lower() in acc['Account'].lower():
            data.append({
            "_id": str(ObjectId(acc['_id'])),
            "Account": acc['Account'],
            "AcctType": acc['AcctType'],
            "Description": acc['Description'],
            "Department": acc['Department'],
            "TypicalBal": acc['TypicalBal'],
            "DebitOffset": acc['DebitOffset'],
            "CreditOffset": acc['CreditOffset'],
        })
    accounts = []
    dataF = len(data)
    if(dataF>(pages+10)):
        j=0
        for i in range(pages, pages+10):
            accounts.append(data[i])
    elif((dataF + 10)>(pages+10)):
        ran = dataF - pages
        for i in range(pages, pages+ran):
            accounts.append(data[i])
    return {"payload": accounts, "status": 200}

def createAccount(xlsxfile):
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
    return {"message": "Success","status": 201, "payload":[]}

def updateAccount(id, data):
    db.update_one({'_id': ObjectId(id)}, {"$set": data})
    return {"message": "Success","status": 200, "payload":[]}

def deleteAccount(id):
    db.delete_one({'_id': ObjectId(id)})
    return {"message": "Success","status": 200, "payload":[]}