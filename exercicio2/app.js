import express from "express";

const app = express();

app.set('view engine' , 'ejs');

app.get('/',(req, res) => {
    res.render('paginas/index');
});

// Este middleware será executado para todas as rotas que não foram definidas acima
app.use((req, res) => {
    res.status(404).render('paginas/404');
});

app.listen(3000, () =>{
    console.log('Servidor rodando normalmente.');
})
