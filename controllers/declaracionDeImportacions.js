const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const DeclaracionDeImportacion = require('../models/declaracionDeImportacion');

const declaracionDeImportacionsGet = async(req = request, res = response) => {
    console.log(req.query);
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, declaracionDeImportacions ] = await Promise.all([
        DeclaracionDeImportacion.countDocuments(query),
        DeclaracionDeImportacion.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        declaracionDeImportacions
    });
}

const declaracionDeImportacionsPost = async(req, res = response) => {
    
    const declaracionDeImportacion = new DeclaracionDeImportacion(req.body);

    // Guardar en BD

    await declaracionDeImportacion.save();

    res.json({
        declaracionDeImportacion
    });
}

const declaracionDeImportacionsPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const declaracionDeImportacion = await DeclaracionDeImportacion.findByIdAndUpdate( id, resto );

    res.json(declaracionDeImportacion);
}

const declaracionDeImportacionsPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const declaracionDeImportacionsDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const declaracionDeImportacion = await DeclaracionDeImportacion.findByIdAndUpdate( id, { estado: false } );


    res.json(declaracionDeImportacion);
}

module.exports = {
    declaracionDeImportacionsGet,
    declaracionDeImportacionsPost,
    declaracionDeImportacionsPut,
    declaracionDeImportacionsPatch,
    declaracionDeImportacionsDelete,
}