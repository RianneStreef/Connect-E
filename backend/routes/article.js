post(“/”, auth, articleCtrl.createArticle);
get(“/”, auth, articleCtrl.getAllArticless);
delete(“/”, auth, articleCtrl.deleteArticle);
post(“/:id/like”, auth, articleCtrl.likeArticle);
