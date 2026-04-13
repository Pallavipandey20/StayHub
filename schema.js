const Joi = require("joi");

// module.exports.listingSchema =Joi.object({
//     listing :Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         price:Joi.number().required().min(0),
//         image:Joi.string().allow(" ", null)
//     }).required()
// });

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      url: Joi.string().allow("", null),
      filename: Joi.string().allow("", null),
    }),
  }).required(),
});
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

//{  // const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//   listing: Joi.object({
//     title: Joi.string().required(),
//     price: Joi.number().required(),
//     description: Joi.string().required(),
//     location: Joi.string().required(),
//     country: Joi.string().required() // <-- This line is essential
//   }).required()
// });

// module.exports.reviewSchema = Joi.object({
//   review: Joi.object({
//     rating: Joi.number().required(),
//     comment: Joi.string().required()
//   }).required()
// });}
