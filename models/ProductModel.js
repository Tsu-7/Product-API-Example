const sql = require('./db');

var Model =(item)=>{
    this.name= item.name;
    this.color = item.color;
    this.price = item.price;
};

Model.getAllProducts= getAllProducts=(result)=>{
    sql.query('select * from products',(err, res)=>{
        if(err) {
            console.log('err: ',err);
            result(null,err);
        }
        else{
            console.log('res model: ',res);
            result(null, res);
        }
    })
};

Model.createItem = createItem=(newItem, result)=>{
    sql.query('insert into products set ?',newItem, (err, res)=>{
        console.log('model');
        if(err) {
            console.log("err: ", err);
            result(err,null);
        }
        else {
            console.log("res: ",res);
            result(null, res.insertId);
        }
    });
};

Model.getById = getById =(id, result)=>{
    sql.query('select * from products where id = ?', id ,(err, res)=>{
        console.log('model');
        if(err) {
            console.log("err: ", err);
            result(err, null);
        }
        else{
            console.log("res: ", res);
            result(null,res);
        }
    });
}

Model.patchById = patchById =(id, payload, result)=>{
    sql.query('update products set ? where id = ?',
    [payload, id],
    (err, res)=>{
        console.log("model");
        if(err) {
            console.log('err:',err);
            result(err,null);
        }
        else{
            console.log("res: ",res);
            result(null,res);
        }
    });
}


Model.deleteById = deleteById =(id, result)=>{
    sql.query('delete from products where id = ?',id, (err, res)=>{
        console.log('model');
        if(err) {
            console.log('err:',err);
            result(err, null);
        }
        else{
            console.log('res: ',res);
            result(null, res);
        }
    });
};


module.exports = Model;