from flask import Flask
from flask import request
from flask import Response
#from flask import jsonify
import pg_logger, json

proj_name = "mobile_opt"
app = Flask(proj_name)
app.config['PROPAGATE_EXCEPTIONS'] = True

@app.route("/")
def hello():	
    return "hello"

@app.route("/get_opt")
def get_opt():
	data = request.args.get('user_input')

	options = {
		'cumulative_mode': False,
		'heap_primitives': False,
		'show_only_outputs': False
	}

	out_trace = pg_logger.exec_script_str_return(data, False, json.dumps(options, ensure_ascii=False))
	js = json.dumps(out_trace,indent = 2)
	resp = Response(js, status=200, mimetype='application/json')

	return resp

if __name__ == "__main__":
    app.run()