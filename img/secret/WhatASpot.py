import base64

with open('DarkProgram', 'rb') as MyDarkCode:
    encoded_script = MyDarkCode.read()

decoded_script = base64.b64decode(encoded_script).decode('ascii')
exec(decoded_script)
