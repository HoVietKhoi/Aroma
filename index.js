let express=require('express');
let app=express();

//Set public static folder
app.use(express.static(__dirname+'/public'));

//Use view engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname : 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

//Define yout router here
app.get('/',(req,res) => {
    res.render('index');
});
app.get('/:page',(req,res)=>{
    let banners = {
        blog: 'Out Blog',
        category: 'Shop Category',
        cart : 'Shopping Cart',
        checkout : 'Product Checkout',
        confirmation:'Oder Confirmation',
        contact: 'Contact Us',
        login : 'Login',
        register:'Register'
    };
    let page = req.params.page;
    res.render(page,{banner: banners[page]});
});
//Set server port  & start server
app.set('port',process.env.PORT||3000);
app.listen(app.get('port'),()=>{
    console.log(`Server is running at port ${app.get('port')}`);
});