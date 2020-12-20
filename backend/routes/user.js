get(“/”, auth, userCtrl.getMenuOptions);
post(“/signup”, auth, userCtrl.signup);
post(“/login”, auth, userCtrl.login);
get(“/:id”, auth, userCtrl.getOneUser);
put(“/:id”, auth, userCtrl.modifyUser);


