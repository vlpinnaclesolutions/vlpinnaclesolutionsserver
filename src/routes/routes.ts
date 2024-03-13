import express from 'express'
import MessageResponse from '../types/MessageResponse'
import ReiDasFeiras from './1/routes'
import ReiDaAcademia from './2/routes'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
        message: `SERVIDOR DOS CLIENTES 👋🌎`
    })
})

// ROTAS
router.use('/1', ReiDasFeiras)
router.use('/2', ReiDaAcademia)
//router.use('/alimentos', alimentos)


export default router;