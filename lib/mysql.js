// const mysql = require('mysql')
const mysql = require('mysql');
const DBConfig = require('../config/DBconfig')

let pool = mysql.createPool(DBConfig);

let allSqlAction = (sql,value)=>{
    return new Promise((resolve,reject)=>[
        pool.getConnection((err,connection)=>{
            if(err){
                console.log(err)
                reject(err)
            }else{
                console.log("数据连接成功")
                connection.query(sql,value,(err,row)=>{
                    if(err) reject(err)
                    else{
                        resolve(row)
                    }
                    connection.release()
                    console.log("数据库放开内存")
                })
            }
        })
    ])
}

module.exports={
    allSqlAction
}