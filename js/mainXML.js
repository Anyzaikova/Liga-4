// POST XMLHttpRequest
let user2 = new User('lala','bye', true);
XMLHttpReq.postTask(user2);

// GET XMLHttpRequest
XMLHttpReq.getTask(780);


// GET ALL TASKS XMLHttpRequest
XMLHttpReq.getAllTask(true,"h",false);

// PATCH XMLHttpRequest
let user3=new UserPatch('Lorem','Hello', true, true);
XMLHttpReq.patchTask(user3,781);


// DELETE XMLHttpRequest
XMLHttpReq.deletehTask(780);

