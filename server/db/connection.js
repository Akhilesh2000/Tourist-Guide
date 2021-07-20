const mongoose = require('mongoose');

const DB =process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    usezfindModify:false
}).then(() => {
    console.log(`connection successful`);

}).catch((err) => console.log(`no connections`));