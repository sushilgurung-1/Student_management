from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/")
def register():
    return render_template('register.html')

@app.route("/submit", methods=["POST", "GET"])
def presenting():
    if request.method=='POST':
        names = request.form["name"]
        emails = request.form["email"]
        contacts = request.form["contact"]
        data_of_student = {"name": names, "email": emails, "contact": contacts}
    
    return render_template("details.html", student_data = data_of_student)


if __name__ == "__main__":
    app.run(debug=True)

