const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',  
    user: 'vwlpxeajnjbplm',  
    database: 'd53obufq6063c4',  
    password: 'f884602b99fe3c14fa07c0b545b4d2f4fa899a0ac971f53e17a1131b03596288',
    port: 5432,
    ssl: true
});  

module.exports = pool;