var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');


router.get('/', async function (req, res, next) {

    var productos = await productosModel.getProductos();

    res.render('admin/productos', {  
        layout: 'admin/layout',
        usuario: req.session.nombre,
        productos
    });
});


router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try{
        if (req.body.categoria != "" && req.body.titulo != "" && req.body.descripcion != ""){
            await productosModel.insertProducto(req.body);
            res.redirect('/admin/productos')
        } else {
            res.render('admin/agregar' , {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar' , {
            layout: 'admin/agregar',
            error: true,
            message: 'No se cargo el producto'
        })
    }
})

module.exports = router;