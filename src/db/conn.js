const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Priyank:priyank310800@cluster0.symfd.mongodb.net/task?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    // useCreateIndex : true
});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('connected to mongodb');
});
