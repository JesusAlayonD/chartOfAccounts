import pymongo
from dotenv import load_dotenv
import os

MONGO_URI = os.getenv('MONGO_URI')

client = pymongo.MongoClient(MONGO_URI)
