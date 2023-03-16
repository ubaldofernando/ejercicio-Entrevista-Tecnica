import {pool} from '../db.js'

export const crearClientes = async (req, res) => {
   const {nombre, cuil} = req.body
   const [filas] = await pool.query('INSERT INTO cliente(nombre, cuil) VALUES (?, ?)', [nombre, cuil])
   res.send({
    id: filas.insertId,
    nombre,
    cuil
})
}
