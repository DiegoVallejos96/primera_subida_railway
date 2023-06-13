import express from "express";
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.listen(PORT)
console.log("Server on port", PORT)

app.get('/', async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM usersdb.estudiantes')
    res.json(rows)
})

app.get('/ping', async (req,res) => {
    const resul = await pool.query('SELECT ')
})

app.get('/create', async (req,res) => {
    const result  = await pool.query('INSERT INTO estudiantes (usuario, contraseña, escuela_secundaria) VALUES ("Juancho", "Sucontra", "Escuela Secundaria Thompson")')
    res.json(result)
})