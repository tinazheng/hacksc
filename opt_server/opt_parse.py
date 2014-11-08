import pg_logger, json

def json_finalizer(input_code, output_trace):
  ret = dict(code=input_code, trace=output_trace)
  json_output = json.dumps(ret, indent=2)
  return json_output

def get_opt_dict(user_input):
	temp = {"a":1,"b":2}

	options = {
		'cumulative_mode': False,
		'heap_primitives': False,
		'show_only_outputs': False
	}

	out_trace = pg_logger.exec_script_str_return("x = 5", False, json.dumps(options, ensure_ascii=False),json_finalizer)

	return json.dumps(out_trace, indent=2)