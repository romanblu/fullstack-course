from flask import Flask, request
import requests
import mysql.connector as mysql
from settings import apikey, dbpwd
import json

db = mysql.connect(
	host="localhost",
	user="root",
	passwd=dbpwd,
	database="blog"
)


app = Flask(__name__)

@app.route('/')
def hello():
	return 'Hello World!'

@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
	if request.method == 'GET':
		return get_all_posts()
	else:
		return add_post()

def add_post():
	data = request.get_json()
	print(data)
	query = "insert into posts (title, content, image, author_id) values(%s, %s, %s, %s)"
	values = (data['title'], data['content'], data['image'], data['author_id'])
	cursor = db.cursor()
	cursor.execute(query, values)
	db.commit()
	new_post_id = cursor.lastrowid
	cursor.close()
	return get_post(new_post_id)

def get_post(id):
	query = "select id, title, content, image, author_id from posts where id = %s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	cursor.close()
	header = ['id', 'title', 'description', 'imageSrc', 'author_id']
	return json.dumps(dict(zip(header, record)))

def get_all_posts():
	query="select id, title, content, image, author_id from posts "
	cursor = db.cursor()
	cursor.execute(query)
	records = cursor.fetchall()
	cursor.close()
	print(records)
	header = ['id', 'title', 'description', 'imageSrc', 'author_id']
	data = []
	for r in records:
		data.append(dict(zip(header,r)))
	print(data)
	return json.dumps(data)

if __name__ == "__main__":
	app.run()