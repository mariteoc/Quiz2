const express = require('express');
const mongoose = require('mongoose')

const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/Exam', {
mongoose.connect('mongodb+srv://mari:.wMWBH83T9KUZMm@nodexpress-mariana.t8cgnzd.mongodb.net/exam?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  });

const quizSchema = new mongoose.Schema({
    name:String,
    SID: Number,
})

const Quiz = mongoose.model('Quize',quizSchema);

const me = new Quiz({
    name:"Mariana Teodoro de Moura",
    SID: 300338521,
}

)


Quiz.insertMany([me])
.then(function(){
    console.log('Data inserted')
}).catch(function(error){
    console.log(error)
});

app.listen(7000);
console.log("The server is running on port 7000");