Para persistir os dados, foi utilizado MongoDB através do uso de Docker.

Para inicializar o mongo:

```
cd ex1/dataset
docker compose up -d
docker cp -/new_contratos2024.json {containerid}:/new_contratos2024.json
docker exec -it dataset-mongodb-1 bash
mongosh
mongoimport --host mongodb -d contratos -c contratos --type json --file /dataset/new_contratos2024.json --jsonArray
```

Para correr a API e o Frontend, basta usar o comando abaixo num terminal em cada diretório:
`npm start`