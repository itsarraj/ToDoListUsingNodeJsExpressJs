/**
 * @author itsarraj
 * @version 0.0.1
 */

// Variables Declarations
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

// Setup View Controller
app.set('view engine', 'ejs');

// Setup View Controller Path
app.set('views', path.join(__dirname, 'views'));

// Built-in Middleware Function of express  recognize the incoming request objects as JSON and String
app.use(express.urlencoded());

// This adds a middleware for serving static files in Express app
app.use(express.static('assets'));

let indexNo = 0;
// Arrays of Todos
var todosList = [];

app.get('/', function (req, res) {
    return res.render('ToDoHome', {
        todos_List: todosList,
    });
});

app.post('/create-todos', function (req, res) {
    req.body.index = indexNo++;
    todosList.push(req.body);
    console.log(req.body);
    console.log(todosList);
    return res.redirect('back');
});

app.get('/delete-todos/', function (req, res) {
    let todos_index = req.query.index;
    let todos_delete_index = todosList.findIndex(
        (todos_list_item) => todos_list_item.index == todos_index
    );

    if (todos_delete_index != -1) {
        todosList.splice(todos_delete_index, 1);
    }
    return res.redirect('back');
});

app.listen(port, function (err) {
    if (err) {
        console.log(' Error in running the server : ', err);
    }
    console.log(' Server is listening on port : ', port);
});
