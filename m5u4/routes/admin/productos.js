var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');


/* listar productos */
router.get('/', async function (req, res, next) {

    var productos = await productosModel.getProductos();

    res.render('admin/productos', {  
        layout: 'admin/layout',
        usuario: req.session.nombre,
        productos
    });
});


/* agregar productos */
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


/* eliminar */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await productosModel.deleteProductosById(id);
    res.redirect('/admin/productos');

})


/* traer producto por ID para luego modificarlo */
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    //console.log(req.params.id);
    var producto = await productosModel.getProductoById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        producto
    })
})

/* modificar */
router.post('/modificar', async (req, res, next) => {
    try{
        var obj = {
            categoria: req.body.categoria,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        }

        console.log(req.body)
        console.log(obj)
        console.log(req.body.id)

        await productosModel.modificarProductoById(obj, req.body.id);
        res.redirect('/admin/productos');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el producto'
        })
    }
})


module.exports = router;