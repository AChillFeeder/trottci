import os, re

def get_file_extension(filename):
    return os.path.splitext(filename)[1]

def is_valid_email(email):
    # Simple email validation regex
    return re.match(r"[^@]+@[^@]+\.[^@]+", email) is not None

def sanitize_input(data):
    # Remove any characters that could be used for SQL injection
    return data.replace("'", "").replace('"', "")