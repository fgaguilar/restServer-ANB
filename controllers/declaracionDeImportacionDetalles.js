const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const DeclaracionDeImportacionDetalle = require('../models/declaracionDeImportacionDetalle');

const declaracionDeImportacionDetallesGet = async(req = request, res = response) => {
    console.log(req.query);
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, declaracionDeImportacionDetalles ] = await Promise.all([
        DeclaracionDeImportacionDetalle.countDocuments(query),
        DeclaracionDeImportacionDetalle.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        declaracionDeImportacionDetalles
    });
}

const declaracionDeImportacionDetallesPost = async(req, res = response) => {
    
    const declaracionDeImportacionDetalle = new DeclaracionDeImportacionDetalle(req.body);

    // Guardar en BD

    await declaracionDeImportacionDetalle.save();

    res.json({
        declaracionDeImportacionDetalle
    });
}

const declaracionDeImportacionDetallesPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const declaracionDeImportacionDetalle = await DeclaracionDeImportacionDetalle.findByIdAndUpdate( id, resto );

    res.json(declaracionDeImportacionDetalle);
}

const declaracionDeImportacionDetallesPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const declaracionDeImportacionDetallesDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const declaracionDeImportacionDetalle = await DeclaracionDeImportacionDetalle.findByIdAndUpdate( id, { estado: false } );


    res.json(declaracionDeImportacionDetalle);
}

module.exports = {
    declaracionDeImportacionDetallesGet,
    declaracionDeImportacionDetallesPost,
    declaracionDeImportacionDetallesPut,
    declaracionDeImportacionDetallesPatch,
    declaracionDeImportacionDetallesDelete,
}