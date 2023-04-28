const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

router.post('/register',employeeController.createEmployee); 
router.get('/employees' , employeeController.getEmployees );
router.get('/employee/:id',employeeController.getEmployeesById);
router.patch('/update/employee',employeeController.updateEmp);
router.put('/update/employee',employeeController.updateEmp);
router.delete('/employee/:id',employeeController.deleteEmployeeById);

module.exports = router;