from flask import Flask, request, abort
import requests
import mysql.connector as mysql
from settings import apikey, dbpwd
import json
import bcrypt

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

@app.route('/login', methods=['POST'])
def login():
	data = request.get_json()
	query = "select id, password from users where username = %s "
	values = (data['user'], )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	if not record:
    		abort(401)
	user_id = record[0]
	hashed_pwd = record[1].encode('utf-8')
	if bcrypt.hashpw(data['password'].encode('utf-8'), hashed_pwd) != hashed_pwd:
    		abort(401) 
	cursor.close()
	
	return ""

@app.route('/signup', methods=['POST'])
def signup():
	data = request.get_json()
	query = "insert into users (username, password) values(%s, %s)"
	hashed_pwd = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
	values = (data['user'], hashed_pwd)
	cursor = db.cursor()
	cursor.execute(query, values)
	db.commit()
	new_post_id = cursor.lastrowid
	cursor.close()
	return get_user(new_post_id)

@app.route('/posts/<id>')
def get_post(id):
	print("GETTING  POSTS  ID " + id)
	query = "select id, title, content, image, author_id from posts where id = %s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	cursor.close()
	# user = get_user(record[-1])
	# print(" USER  ", user[1])
	header = ['id', 'title', 'content', 'image', 'author_id']
	return json.dumps(dict(zip(header, record)))



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

def get_all_posts():
	query="select id, title, content, image, author_id from posts "
	cursor = db.cursor()
	cursor.execute(query)
	records = cursor.fetchall()
	cursor.close()
	print(records)
	header = ['id', 'title', 'content', 'image', 'author_id']
	data = []
	for r in records:
		data.append(dict(zip(header,r)))
	print(data)
	return json.dumps(data)

@app.route('/users/<id>')
def get_user(id):
	print("GETTING USER ID " , id)
	query = "select id, username, password from users where id = %s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	cursor.close()
	header = ['id', 'username', 'password']
	return json.dumps(dict(zip(header, record)))

if __name__ == "__main__":
	app.run()