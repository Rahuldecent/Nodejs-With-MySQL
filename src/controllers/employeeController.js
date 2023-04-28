const db = require('../db');


exports.createEmployee = (req, res) => {
    let data = req.body
    let empData = [data.name, data.salary]
    db.query('INSERT INTO employee(name,salary)values(?)', [empData], (err, rows) => {
        if (err) console.log(err)
        return res.send({ data: rows })
    })
}


exports.getEmployees = async (req, res) => {
    db.query('SELECT * FROM employee', (err, rows) => {
        if (err) console.log(err)
        return res.send({ data: rows })
    })
}
exports.getEmployeesById = (req, res) => {
    db.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) console.log(err)
        else return res.send({ data: rows })
    })
}

exports.updateEmp = (req, res) => {
    let emp = req.body
    db.query('UPDATE employee  SET  ? WHERE id =' + emp.id, [emp], (err, rows) => {
        if (err) console.log(err)
        else return res.send({ data: rows })
    })
}
exports.updateInsertEmp = (req, res) => {
    let emp = req.body
    db.query('UPDATE SET ? WHERE id = ' + emp.id, [emp], (err, rows) => {
        if (err) console.log(err)
        else if (rows.affectedRows == 0) {
            let empData = [data.name, data.salary]
            db.query('INSERT INTO employee(name,salary)values(?)', [empData], (err, rows) => {
                if (err) console.log(err)
                return res.send({ data: rows })
            })
        }
        else return res.send({ data: rows })
    })

}


exports.deleteEmployeeById = (req, res) => {
    db.query('DELETE FROM  employee WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) console.log(err)
        else return res.send({ data: rows })
    })
}