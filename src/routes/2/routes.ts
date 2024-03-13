import express from 'express'
import MessageResponse from '../../types/MessageResponse'
import produtos from './produtos/produtos'
import registros from './registros/registros'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
        message: `SERVIDOR CLIENTE 2 👋🌎`
    })
})

// ROTAS
router.use('/produtos', produtos)
router.use('/registros', registros)


export default router;