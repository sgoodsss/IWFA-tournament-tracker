// import Admin model
const { Admin } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single admin by either their id or their email
  async getSingleAdmin({ admin = null, params }, res) {
    const foundAdmin = await Admin.findOne({
      $or: [{ _id: admin ? admin._id : params.id }, { email: params.email }],
    });

    if (!foundAdmin) {
      return res.status(400).json({ message: 'Cannot find an admin with this id or email!' });
    }

    res.json(foundAdmin);
  },

  // create an admin, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createAdmin({ body }, res) {
    const admin = await Admin.create(body);

    if (!admin) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(admin);
    res.json({ token, admin });
  },

  // login an admin, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async loginAdmin({ body }, res) {
    const admin = await Admin.findOne({ $or: [{ name: body.name }, { email: body.email }] });
    if (!admin) {
      return res.status(400).json({ message: "Can't find this admin user" });
    }

    const correctPw = await admin.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(admin);
    res.json({ token, admin });
  },
};
