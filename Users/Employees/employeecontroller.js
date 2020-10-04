const Employee = require('./employeemodel');

const getEmployees = async (req, res, next) => {
  let employees;
  try {
    employees = await Employee.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching employees failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ employees: employees.map(employee => employee.toObject({ getters: true })) });
};

exports.getEmployees = getEmployees;