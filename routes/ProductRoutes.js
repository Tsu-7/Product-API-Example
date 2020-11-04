const express = require('express');
const Router = express.Router();
const todo = require('../controllers/ProductController');

Router.route('/')
    .get(todo.get_all_products)
    .post(todo.create_item);

Router.route('/:id')
    .get(todo.get_by_id)
    .delete(todo.delete_by_id)
    .patch(todo.patch_by_id)


module.exports= Router;