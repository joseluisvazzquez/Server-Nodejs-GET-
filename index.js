const express = require('express');
const db = require("better-sqlite3")("persona.sqlite");
const { request } = require('http');
const app = express()
const port = 3000

//COnf base de datso
app.get('/patata', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.get('/personas', (req, res) => {
    //aqui el select de la base de datos

    const rows = db.prepare("SELECT  * from personas").all();
    res.json(rows)
  })
  app.get('/persona', (req, res) => {
    //aqui el select de la base de datos
    personaId = req.query.id;
    const row = db.prepare("SELECT  * from personas WHERE id = ?").get(personaId);
    res.json(row);
  })
  app.get('/productos', (req, res) => {
    //aqui el select de la base de datos

    const row = db.prepare("SELECT  * from productos").all();
    res.json(row);
  })
  app.get('/producto', (req, res) => {
    //aqui el select de la base de datos
    productosId = req.query.id;
    const row = db.prepare("SELECT  * from productos WHERE id = ?").get(productosId);
    res.json(row);
  })
  app.get('/comandes', (req, res) => {
    //aqui el select de la base de datos
    personaId = req.query.id;
    const row = db.prepare("SELECT comandes.id as id_comanda, personas.nombre, personas.apellidos, productos.nombre as producto, productos.precio FROM comandes JOIN personas ON personas.id = comandes.usuario_id JOIN productos ON productos.id = comandes.producto_id").all();
    res.json(row);
  })
  app.get('/comanda', (req, res) => {
    //aqui el select de la base de datos
    comandasId = req.query.id;
    const row = db.prepare("SELECT comandes.id as id_comanda, personas.nombre, personas.apellidos, productos.nombre as producto, productos.precio FROM comandes JOIN personas ON personas.id = comandes.usuario_id JOIN productos ON productos.id = comandes.producto_id WHERE comandes.id = ?").get(comandasId);
    res.json(row);
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})