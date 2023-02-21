const express = require("express");
const authToken = require("../middleware/authToken");
// const {
//   getUser,
//   createUser,
//   deleteUser,
//   login,
//   refreshToken,
//   logout,
//   todo,
//   homepage,
// } = require("../controllers/controller");

// const {getCustomers} = require("../controllers/controller2");
const { getListItems, getListItemss } = require("../controllers/listItemController");

const router = express.Router();

/* Creating the routes for the user controller. */

// router.get("/users/:name",authToken, getUser);

// router.post("/createUser", createUser);

// router.delete("/users/:name", deleteUser);

// router.post("/login",login);

// router.post("/token", refreshToken);

// router.delete("/logout", logout);

// router.post("/todo", todo);

// router.get("/todo", todo);

// router.get("/homepage", homepage);

// router.get("/:name", getCustomers);

router.get("/navtex", getListItems);

router.get("/navtexs", getListItemss);

module.exports = router;