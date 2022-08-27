import json
import requests

access_token = "<ACCESS_TOKEN>"
conversation_id = "<CONVERSATION_ID>"

headers = {
  "Authorization": "Bearer " + access_token,
  "Content-Type": "application/json"
}

response = requests.request(
  method="GET", 
  url="https://api.symbl.ai/v1/conversations/" + conversation_id + "/summary",
  headers=headers
)

print(json.dumps(response.json(), indent=2))
