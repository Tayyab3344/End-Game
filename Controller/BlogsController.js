const DisplayBlogs = require('D:/WebEngineeringProject/End-Game-1/Model/AddblogSchema.js')
exports.all = (req, res) => {
    DisplayBlogs.find(function(err, blogs) {
      if (err) {
        return res
          .status(400)
          }
      res.status(200).render("Mainscreen")
    });
  };


//   Update

//   exports.updateblogs = async (req, res) => {
//     let result = await DisplayBlogs.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//     );
//     if (!result)
//       return res.status(400).json({
//         err: 'Oops something went wrong! Cannont update student with ${req.params.id}.'
//       });
//     res.redirect("/display");
//   };
