import {Router} from 'express'
import {getViajes, postViajes, putViajes, deleteViajes} from '../controllers/viajes.controller.js'

const router = Router()

router.get('/getviajes', getViajes)

router.post('/postviajes', postViajes)

router.put('/putviajes/:id', putViajes)

router.delete('/deleteviajes/:id', deleteViajes)

export default router