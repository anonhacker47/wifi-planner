from flask import Flask, render_template, request, redirect
from flask_cors import CORS 
import json
from tkinter import *

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def landing():
    return render_template('landing.html')


@app.route('/home', methods=['GET', 'POST'])
def home():
    img = ''
    if request.method == 'POST':
        img = request.form.get('planImage')
        return render_template('index.html', data= img)
    else:
        return render_template('index.html')


@app.route('/out', methods=['GET', 'POST'])
def view():
    if request.method == 'POST':
        svg = request.form.get('svg')
        svg = json.loads(svg)
        r = Tk()
        c = Canvas(r, background="white", width=1800, height=1000)
        for i in svg:
            c.create_line(i['x1'], i['y1'],i['x2'],i['y2'],fill=i['stroke'], width=2)
        c.pack()
        r.mainloop()
        return str(svg)

if __name__ == '__main__':
    app.run(debug=True)
