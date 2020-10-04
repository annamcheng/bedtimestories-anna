//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Story = require("../../models/stories");
///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////
//INDEX ROUTE
router.get("/", auth, async (req, res) => {
  try {
    const stories = await Story.find({ username: req.session.username });
    res.render("stories/index.jsx", { stories });
  } catch (err) {
    console.log(err);
  }
});

//NEW ROUTE
router.get("/new", auth, async (req, res) => {
  try {
    res.render("stories/new.jsx");
  } catch (error) {
    console.log(error);
  }
});

router.post("/new", (req, res) => {
  console.log(req.body)
  Story.create(req.body, (err, newStory) => {
    res.redirect("/stories/show.jsx", {story: newStory, index: newStory._id})
  })
})
//DELETE ROUTE
router.delete("/:id", auth, async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.redirect("/stories/");
  } catch (error) {
    console.log(error);
  }
});

//UPDATE ROUTE
router.put("/edit/:id", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    await Story.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.redirect("/stories/");
  } catch (error) {
    console.log(error);
  }
});

//CREATE ROUTE
router.post("/", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    const newStory = await Story.create(req.body);
    res.redirect("/stories/");
  } catch (error) {
    console.log(error);
  }
});

//EDIT ROUTE
router.get("/edit/:id", auth, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    res.render("stories/edit.jsx", { story });
  } catch (error) {
    console.log(error);
  }
});

//SHOW
router.get("/:id", (req, res) => {
  try {
    Story.findById(req.params.id, (err, foundStory) => {
      //find the story
      res.render("stories/show.jsx", {
        story: foundStory,
        index: req.params.id
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
