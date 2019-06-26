const { msg } = require("../../../../config/message");


// signUp/registration
registration = async (req, res) => {

};

// User login
login = async (data) => {
  var body = pickUserCredentials(data);
  let user = await User.findOne({ $or: [{ email: body.email }, { phone: body.email }] });
  if (!user) {
    throw msg.userNotFound;
  }
  if (!user.active) {
    throw msg.userNotVerified;
  }
  let verifiedPassword = bcrypt.compareSync(body.password, user.password);

  if (!verifiedPassword) {
    throw msg.invalidCredentials;
  } else {
    let wishlist = await Wishlist.findOne({ userId: user.id })
    user.wishlist = wishlist
    return {
      result: pickUserProfileResponse(user),
      token: await generateAuthToken(user),
      message: msg.loggedIn
    };
  }
};





module.exports = {
  registration,
  login
};