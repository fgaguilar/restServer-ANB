
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { declaracionDeImportacionsGet,
        declaracionDeImportacionsPut,
        declaracionDeImportacionsPost,
        declaracionDeImportacionsDelete,
        declaracionDeImportacionsPatch } = require('../controllers/declaracionDeImportacions');

const router = Router();

router.get('/', declaracionDeImportacionsGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    //check('id').custom( existeUsuarioPorId ),
    //check('rol').custom( esRoleValido ), 
    validarCampos
],declaracionDeImportacionsPut );

router.post('/',[
    //check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    //check('correo', 'El correo no es válido').isEmail(),
    //check('correo').custom( emailExiste ),
    //check('rol').custom( esRoleValido ), 
    //validarCampos
], declaracionDeImportacionsPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    //check('id').custom( existeUsuarioPorId ),
    validarCampos
],declaracionDeImportacionsDelete );

router.patch('/', declaracionDeImportacionsPatch );

module.exports = router;