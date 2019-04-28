const allSQLAction =  require('../lib/mysql')

async function checkUser(name,password){
    console.log(name,password)
    let sql = `SELECT * from user WHERE phone = ${name} and password = ${password}`
    return allSQLAction.allSqlAction(sql).then(res=>{
        if(res.length == 1&&res[0].phone===name&&password===password){
            return {msg:'登陆成功',code:200}
        }else{
            return {msg:'登录失败',code:201}
        }
    })
}

async function findUser(phone,password){
    let sql = `select * from user where phone = ${phone}`;
    return allSQLAction.allSqlAction(sql).then(res=>{
        if(res.length == 0){
            return registerUser(phone,password)
        }else{
            return{msg:'用户已经存在',coe:202}
        }
    })
}

async function registerUser(phone,password){
    let sql = `insert into user(phone,password) values(${phone},${password})`;
    return allSQLAction.allSqlAction(sql).then(res=>{
        if(res.affectedRows == 1){
            return {msg:'注册成功',code:200}
        }else{
            return {msg:'注册失败',code:200}
        }
    })
}

module.exports = {
    checkUser,
    findUser,
    registerUser
}