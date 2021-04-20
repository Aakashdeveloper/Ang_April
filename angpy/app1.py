from flask import Flask, jsonify, render_template, request

app = Flask(__name__, static_url_path='/dist')

@app.route('/')
def home_page():
    return render_template('/dist/index.html')
    
app.run(port=3300)