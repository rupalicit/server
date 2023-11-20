module.exports = app => {
    const nishu = require("../controllers/nishu.controller.js");
  
    var router = require("express").Router();
    
    // Create a new 
    router.post("/", nishus.create);
  
    // Retrieve all 
    router.get("/", nishus.findAll);
  
    // Retrieve all published
    router.get("/published", nishus.findAllPublished);
  
    // Retrieve a single with id
    router.get("/:id", nishus.findOne);
  
    // Update  with id
    router.put("/:id", nishus.update);
  
    // Delete with id
    router.delete("/:id", nishus.delete);
  
    // Delete all 
    router.delete("/", nishus.deleteAll);

     // Fetch Counting of all 
  router.get("/test/ftd", nishus.findTotalDonars);
  
    app.use('/api/nishus', router);
  };
  