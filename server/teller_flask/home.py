import flask
import platform

from flask_restful import Api
from flask_restful_swagger import swagger
from teller_flask.captains_log import captains_log

app = flask.Flask(__name__, static_url_path="/static")


@app.route("/")
def home():
    return flask.render_template("home.html", flask=flask.__version__, python=platform.python_version())


@app.route("/healthcheck/")
def healthcheck():
    return app.make_response("Teller Flask Webapp is healthy")

from flask import request

@app.route("/api/feedback", methods=["POST"])
def create_task():
    if not request.json or "team" not in request.json:
        abort(400)
    feedback = {
        "team": request.json["team"],
        "relevance": request.json["relevance"],
        "excitement": request.json["excitement"],
        "succinctness": request.json["succinctness"],
        "dests": ["captains-log", "teller-flask"]
    }
    captains_log(env="test", eventtype="teller_feedback", data=feedback)
    return flask.jsonify(feedback), 201

if __name__ == "__main__":
    app.debug = True
    app.run()
