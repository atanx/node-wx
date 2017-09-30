const Sequelize = require('sequelize');

const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

/*mysql
create table links ( 
    id varchar(50) not null,
    url varchar(100) not null,
    title varchar(100) not null,
    brief varchar(100) not null,      
    createdAt bigint not null  
) engine=innodb;

// 创建测试表，用于测试anyproxy，捕捉数据。
*/

var Link = sequelize.define('link', { 
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    }, 
    url: Sequelize.STRING(100),
    title: Sequelize.STRING(100),
    brief: Sequelize.STRING(100),
    createdAt: Sequelize.BIGINT 
}, {
        timestamps: false
    });


    function insert(url, title, brief, createdAt){
        var now = Date.now();
           var d =  Link.create({
                id: 'id-'+now,
                url:url,
                title: title,
                brief: brief,
                createdAt: createdAt
            });
            console.log('created: '+ JSON.stringify(d));
    };


    module.exports = {
        insert: insert
    }

/* test
    now = Date.now();
    insert('http://www.baidu.com', 'test', 'ssssx', now)
    */
    