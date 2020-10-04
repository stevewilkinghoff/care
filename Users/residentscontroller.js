const Resident = require('./residentsmodel');

const getResidents = async (req, res, next) => {
  let residents;
  try {
    residents = await Resident.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ residents: residents.map(resident => resident.toObject({ getters: true })) });
};

exports.getResidents = getResidents;