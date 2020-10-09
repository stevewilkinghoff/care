const AfternoonTasks = require('./afternoontasksmodel');

const getAfternoonTasks = async (req, res, next) => {
  let afternoontasks;
  try {
    afternoontasks = await AfternoonTasks.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching daily tasks - morning failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ afternoon: afternoontasks.map(task => task.toObject({ getters: true })) });
};

exports.getAfternoonTasks = getAfternoonTasks;