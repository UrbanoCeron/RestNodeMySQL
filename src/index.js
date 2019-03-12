const express = require('express');
const app = express();

// SETINGS
app.set( 'port', process.env.PORT || 3000 );

// MIDDLEWARES
app.unsubscribe( express.json() );

//ROUTES
app.use( require('./routes/students') );

// STARTING THE SERVER
app.listen( 3000, () => {
    console.log('Server on port 3000', app.get('port'));
});