module.exports = (app) => {
    
    app.get('/', (req, resp) => {
        resp.render('login');
    });

    app.get('/home', (req, resp) => {
        resp.render('home');
    });
}