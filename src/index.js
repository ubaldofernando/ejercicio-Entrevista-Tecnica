import express  from 'express'
import {pool} from './db.js'
import clientesRoutes from './routes/clientes.routes.js'
import viajesRoutes from './routes/viajes.routes.js'

const app = express()

app.use(express.json())
/*
app.get('/ping', async (req, res) => {
    const [resultado] = await pool.query('SELECT "pong" AS resultado')
    res.json(resultado)    
    //[resultado] y resultado[0] para q solo me devuelva json con el resultado y no el resto del json
})
*/
app.use('/api', clientesRoutes)

app.use('/api', viajesRoutes)

app.listen('3000')
console.log('servidor coriendo en puerto 3000')




  