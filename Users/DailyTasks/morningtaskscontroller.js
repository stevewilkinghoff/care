const MorningTasks = require('./morningstasksmodel');

const getMorningTasks = async (req, res, next) => {
  let morningtasks;
  try {
    morningstasks = await MorningTasks.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching daily tasks - morning failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ morningtasks: morningtasks.map(task => task.toObject({ getters: true })) });
};

exports.getMorningTasks = getMorningTasks;