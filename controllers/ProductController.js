const Model = require('../models/ProductModel');

exports.get_all_products =(req, res ) =>{
    console.log('control');
    Model.getAllProducts((err, data)=>{
        if(err) res.send(err);
        console.log('res:', res.body);
        res.send(data);
    });
};

exports.create_item=(req, res)=>{
    console.log("control");
    var newItem = req.body;
    Model.createItem(newItem, (err, data)=>{
        if(err) res.send(err);
        res.json(data);
    })
}

exports.get_by_id =(req, res)=>{
    console.log('control');
    var id = req.params.id;
    console.log(req.params);
    Model.getById(id, (err, data)=>{
        if(err) res.send(err);
        res.json(data);
    })
}

exports.patch_by_id =(req, res)=>{
    console.log('control');
    var id = req.params.id;
    var payload = req.body;
    Model.patchById(id, payload, (err, data)=>{
        if(err) res.send(err);
        res.json(data);
    });
};

exports.delete_by_id =(req, res)=>{
    console.log('control');
    var id= req.params.id;
    Model.deleteById(id, (err, data)=>{
        if(err) res.send(err);
        res.json(data);
    });
}

