import csv
import json

# Read csv file
csv_file = open("contratos2024.csv", "r", newline='', encoding="utf-8")
content = csv.reader(csv_file, delimiter=';')
contratos = []
for info in content:
    contratos.append(info)

# Parse and separate data
headers = contratos[0]
contratos.pop(0)
new_contratos = []
for contrato in contratos:
    new_contrato = {}
    index = 0
    for header in headers:
        if(contrato[index]):
            if(header == 'precoContratual'):
                valor = contrato[index].replace(',','.')
                new_contrato[header] = valor
            else:
                new_contrato[header] = contrato[index]
        else:
            pass
        index += 1
    new_contratos.append(new_contrato)

# Write json file
json_file = open("new_contratos2024.json", "w", encoding="utf-8")
json.dump(new_contratos, json_file, indent=4)
