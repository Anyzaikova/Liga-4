let fasade=new Fasade();

// POST FETCH
let user = new User('lolo','sad', false);
fasade.postTaskRequest (user);

// GET FETCH
fasade.getTaskRequest (777);

 // GET ALL TASKS FETCH
fasade.getAllTasksRequest(true,"",true);

// PATCH FETCH
let user1=new UserPatch('Lorem','Hello', true, true);
fasade.patchTaskRequest(user1,777);


// DELETE FETCH
fasade.deleteTaskRequest(437);



