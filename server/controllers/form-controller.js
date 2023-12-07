// import Form model
const { Form, User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // save a form to a user's `formEntries` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveForm({ user, body }, res) {
    console.log(user);
    console.log(body);
    try {
      // const userEmail = user.email
      const formData = await Form.create(body)
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { formEntries: formData } },
        { new: true, runValidators: true }
      );
      // if (!userEmail) {
      //   return res.status(400).json({ message: 'Wrong email!' });
      // }
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a form from `formEntries`
  async deleteForm({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { formEntries: { formId: params.formId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};
