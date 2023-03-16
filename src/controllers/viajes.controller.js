import {pool} from '../db.js'

export const getViajes = async (req, res) => {
    const [filas] = await pool.query('SELECT * FROM viaje')
    res.json(filas)
}
/*
export const getViajesId = async (req, res) => {
    const [filas] = await pool.query('SELECT * FROM viaje WHERE id = ?', [req.params.id])
    res.json(filas[0])
}
*/

export const postViajes = async (req, res) => {
    const {nombreChofer, apellidoChofer, dniChofer, patente, cuilCliente, origen, destino} = req.body
    const [filas] = await pool.query('INSERT INTO viaje (nombreChofer, apellidoChofer, dniChofer, patente, cuilCliente, origen, destino) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombreChofer, apellidoChofer, dniChofer, patente, cuilCliente, origen, destino])
    res.send({
     id: filas.insertId,
     nombreChofer,
     apellidoChofer,
     dniChofer,
     patente,
     cuilCliente,
     origen,
     destino
 })
 }

export const putViajes = async (req, res) => {
    const {id} = req.params
    const {nombreChofer, apellidoChofer, dniChofer, patente, cuilCliente, origen, destino} = req.body
    const [resultado] = await pool.query('UPDATE viaje SET nombreChofer = ?, apellidoChofer = ?, dniChofer = ?, patente = ?, cuilCliente = ?, origen = ?, destino = ? WHERE id = ?', [nombreChofer, apellidoChofer, dniChofer, patente, cuilCliente, origen, destino, id])
    console.log(resultado)
    res.json('recibido')
}

export const deleteViajes = async (req, res) => {
    const [resultado] = await pool.query('DELETE FROM viaje WHERE id = ?', [req.params.id])
    if (resultado.affectedRows <= 0) return res.status(404).json({
        message: 'id de viaje no encontrado'
    })
    res.sendStatus(204)
}