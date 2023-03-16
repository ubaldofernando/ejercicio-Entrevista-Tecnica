import {Router} from 'express'
import {crearClientes} from '../controllers/clientes.controller.js'

const router = Router()

router.post('/clientes', crearClientes)

export default router