const EveningTasks = require('./eveningtasksmodel');

const getEveningTasks = async (req, res, next) => {
  let eveningtasks;
  try {
    eveningtasks = await EveningTasks.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching daily tasks - morning failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ eveningtasks: eveningtasks.map(task => task.toObject({ getters: true })) });
};

exports.getEveningTasks = getEveningTasks;