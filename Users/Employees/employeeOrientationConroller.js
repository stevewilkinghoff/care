const EmployeeOrientation = require('./employeeOrientationModel');

const getEmployeeOrientations = async (req, res, next) => {
  let employeeOrientations;
  try {
    employeeOrientations = await EmployeeOrientation.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching employees orientation failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ employeeOrientation: employeeOrientations.map(orientation => orientation.toObject({ getters: true })) });
};

exports.getEmployeeOrientations = getEmployeeOrientations;