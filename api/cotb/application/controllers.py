
import requests
import json
import logging
from flask_cors import cross_origin
from flask import Response, request, abort, make_response, jsonify
from cotb.application.improver import improve_joke
from cotb import app

log = logging.getLogger(__name__)


FIRST_NAME = "Jason"
LAST_NAME = "Gerard"


@cross_origin(headers=['Content-Type'])
@app.route("/jokes/random")
def joke_random():

    joke = requests.get('http://api.icndb.com/jokes/random/?exclude=[explicit]').json()

    return Response(
        json.dumps(
            improve_joke(joke, FIRST_NAME, LAST_NAME)
        ),
        mimetype='application/json'
    )
