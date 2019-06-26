const _ = require("lodash");

//After registration
exports.pickRegistrationResponse = data => {
  var response = _.pick(data, [
    "_id",
    "firstName",
    "lastName",
    "gender",
    "email",
    "phone",
    "DOB"
  ]);
  return response;
};

exports.pickRegistrationRequest = data => {
  var response = _.pick(data, [
    "firstName",
    "lastName",
    "gender",
    "email",
    "phone",
    "DOB",
    "password"
  ]);
  return response;
};

exports.pickRegistrationResponseAdmin = data => {
  var response = _.pick(data, [
    "firstName",
    "lastName",
    "gender",
    "email",
    "phone",
    "DOB",
    "role",
    "roleId"
  ]);
  return response;
};

//During login
exports.pickUserCredentials = data => {
  var response = _.pick(data, [
    "email",
    "password"
  ]);
  return response;
};
//After login
exports.pickUserProfileResponse = data => {
  let response = _.pick(data, [
    "_id",
    "firstName",
    "lastName",
    "email",
    "phone",
    "wishlist",
    "gender",
    "DOB"
  ]);
  return response;
};

exports.pickSocialResponse = data => {
  var response = _.pick(data, [
    "firstName",
    "lastName",
    "email",
    "phone",
    "isGoogle",
    "isFacebook",
    "facebook",
    "google",
    "wishlist"
  ]);
  return response;
};

exports.pickOrderResponse = data => {
  var response = _.pick(data, [
    "promoCode",
    "originalPrice",
    "discount",
    "finalPrice",
    "contact",
    "instructions",
    "foodItems",
    "status"
  ]);
  return response;
};

exports.pickForgetPasswordResponse = data => {
  var response = _.pick(data, [
    "_id",
    "firstName",
    "lastName",
    "email",
    "phone",
  ]);
  return response;
};

let commProForUser = ["firstName", "lastName", "gender", "DOB", "phone", "address"]
//For Edit user profile
exports.pickResForUpdateUser = data => {
  var response = _.pick(data, [...commProForUser]);
  return response;
};
exports.pickResForUpdateUserbyAdmin = data => {
  var response = _.pick(data, [...commProForUser, "roleId", "role", "active", "newsLetter", "orderNo"]);
  return response;
};

//For User address Management
exports.pickAddressRes = data => {
  var response = _.pick(data, ["address"]);
  return response;
};

//.............................................................
var commonProductPro = [
  "name",
  "state",
  "usage",
  "description",
  "categories",
  "brand",
  "disease",
  "variables",
  "discount",
  "sku",
  "images",
  "manufacturer",
  "vendors",
  "suitableFor",
  "metaTitle",
  "metaDescription",
  "metaTags",
  "is",
  "related",
  "maxSaleQty",
  // "price",
  "rating",
  "stockVisible",
  "inactivePayment"
];

//writter data for product
exports.pickProductAdmin = data => {
  var response = _.pick(data, [...commonProductPro]);
  return response;
};

// //Editer data for product
// exports.pickProductForEditor = data => {
//   var response = _.pick(data, [
//     ...commonProductPro,
//     "edited"
//   ]);
//   return response;
// };

// //publisher data for product
// exports.pickProductForPublisher = data => {
//   var response = _.pick(data, [
//     ...commonProductPro,
//     "edited",
//     "published",
//     "approved"
//   ]);
//   return response;
// };
// //Aprover data for product
// exports.pickProductForApprover = data => {
//   var response = _.pick(data, [
//     ...commonProductPro,
//     "edited",
//     "published",
//     "approved"
//   ]);
//   return response;
// };

//...........................................................
var commonBrandPro = [
  "name",
  "subBrand",
  "logo",
  "description",
  "address",
  "sellers",
  "metaTitle",
  "metaDescription",
  "metaTags",
  "discount"
];
exports.pickBrandProps = data => {
  var response = _.pick(data, [
    ...commonBrandPro,
    "noOfProducts",
    "active"
  ]);
  return response;
};

exports.pickBrandPropsForUsers = data => data.map(d => _.pick(d, [...commonBrandPro]));


//.........................................
var commonCategoryPro = [
  "name",
  "metaTitle",
  "metaDescription",
  "metaTags",
  "_id",
  "image",
  "description"
];
//writter data for category
exports.pickCateProperties = data => {
  var response = _.pick(data, [...commonCategoryPro]);
  return response;
};

exports.pickCategoryForUser = data => data.map(d => _.pick(d, [...commonCategoryPro, "subCategories"]));

//...........................................
//user(full Information)
exports.pickProductForUserFullInfo = data => {
  var response = _.pick(data, [
    "name",
    "state",
    "ageGroup",
    "usage",
    "variables",
    "description",
    "categories",
    "brand",
    "disease",
    "variables",
    "discount",
    "socialMediaSharing",
    "images",
    "manufacturer",
    "vendors",
    "is",
    "related",
    "suitableFor",
    "price",
    "rating",
    "inactivePayment"
  ])
  return response;
};
//user(List Information)
exports.pickProductForUserList = data => data.map(d => _.pick(d, [
  "_id",
  "name",
  "brand",
  "images",
  "variables",
  "price",
  "discount"
]));
//.........................................

exports.pickProductDataByUser = data => {
  var response = _.pick(data, ["productId", "size", "quantity"]);
  return response;
};
exports.pickProductDataForUpdate = data => {
  var response = _.pick(data, ["size", "quantity"]);
  return response;
};
//................................................ 
const commonblogPro = [
  "title",
  "content",
  "category",
  "products",
  "image",
  "name",
  "metaTitle",
  "metaDescription",
  "metaTags",
  "searchTerms",
  "relatedBlogs",
  "relatedLinks",
  "routes"
];

exports.pickDataForBlog = data => {
  var response = _.pick(data, [...commonblogPro]);
  return response;
};

exports.pickDataForBlogUpdateByAdmin = data => {
  var response = _.pick(data, [...commonblogPro, "isHBrecommended", "disease"]);
  return response;
};
//.......................................................

const commonOrderPro = [
  "userType",
  "user",
  "status",
  "paymentMethod",
  "products",
  "discountCode",
  "totalAmount",
  "discountedPrice",
  "shippingCharge",
  "totalPayableAmt",
  "billingInfo",
  "shippingInfo"
];

exports.pickDataForOrder = data => {
  var res = _.pick(data, [...commonOrderPro]);
  return res;
};

exports.pickSeasonDataForUser = data => {
  var res = _.pick(data, ["name", "description", "products", "validFrom", "validTo"]);
  return res;
};
//........................................
const CommonProForAppointmen = [
  'firstName',
  'lastName',
  'age',
  'gender',
  'concern',
  'symptoms',
  'contactNo',
  'time',
  'email',
  'date',
  'timeSlot'
];
exports.pickAppointmentForUser = data => {
  let res = _.pick(data, [...CommonProForAppointmen]);
  return res;
};
exports.pickForUpdateAppointment = data => {
  let res = _.pick(data, ["type", "status"]);
  return res;
};
