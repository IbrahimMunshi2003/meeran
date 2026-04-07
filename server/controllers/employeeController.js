const Employee = require('../models/Employee');

exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (error) { next(error); }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) { next(error); }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) { res.status(404); throw new Error('Employee not found'); }
    res.json(employee);
  } catch (error) { next(error); }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) { res.status(404); throw new Error('Employee not found'); }
    res.json({ message: 'Employee removed' });
  } catch (error) { next(error); }
};