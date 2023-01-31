import requests

myData = {
    "Python": "3"
}

res = requests.put(
    "http://localhost:3000/updateVehiclesCount", data={"pyt": "4"})
print(res)
