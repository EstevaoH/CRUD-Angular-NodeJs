const express = require('express');
const con = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
    con.connect((erro) => {
        if (!erro) {
            console.log("Servidor Okay");
        } else {
            console.log('Erro: ' + erro.sqlMessage)
        }
    });
});

app.get('/clientes', (req, res) => {
    const slq = 'SELECT * FROM clientes';
    con.query(slq, (erro, resultado) => {
        if (!erro) {
            res.send(resultado);
        } else {
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.get('/clientes/:id', (req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM clientes WHERE cocliente = ?';
    con.query(sql,[id], (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.post('/clientes', (req,res)=>{
    const cli = req.body;
    const sql = 'INSERT INTO clientes( nome, email, limiteCredito, statusCliente ) VALUES (?,?,?,?)';
    con.query(sql, [cli.nome, cli.email, cli.limiteCredito, cli.statusCliente], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.delete('/clientes/:id/', (req, res)=>{
    const cli = req.params.id;
    const sql = 'DELETE FROM clientes WHERE cocliente = ?';
    con.query(sql, [cli], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.put('/clientes', (req, res)=>{
    const cli = req.body;
    const sql = 'UPDATE clientes SET nome = ?, email = ?, limiteCredito = ?, statusCliente = ? WHERE cocliente = ?';
    con.query(sql, [cli.nome, cli.email, cli.limiteCredito, cli.statusCliente, cli.cocliente], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
})
