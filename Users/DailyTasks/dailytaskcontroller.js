const DailyTasks = require('./dailytasksmodel');

const getDailyTasks = async (req, res, next) => {
  let dailytasks;
  try {
    dailytasks = await DailyTasks.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching daily tasks - morning failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ dailytasks: dailytasks.map(task => task.toObject({ getters: true })) });
};

exports.getDailyTasks = getDailyTasks;