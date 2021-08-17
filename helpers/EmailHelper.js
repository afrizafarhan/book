const { Con } = require("../core/connection");

const checkEmailIfExist = (email, tableName) => {
    return Con
    .query(`SELECT email FROM ${tableName} WHERE email = $1`, [email])
    .then(res => res.rowCount > 0 ? true : false)
    .catch(e => e.stack)
}

module.exports = {checkEmailIfExist}