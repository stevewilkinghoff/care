const Assessment = require('./assessmentsmodel');

const getAssessments = async (req, res, next) => {
  let assessments;
  try {
    assessments = await Assessment.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ assessments: assessments.map(assessment => assessment.toObject({ getters: true })) });
};

exports.getAssessments = getAssessments;