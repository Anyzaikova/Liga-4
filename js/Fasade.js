 class Fasade {
  fetchReq;

  constructor() {
    this.fetchReq = new FetchReq();
  }

   postTaskRequest(user) {
    try {
       this.fetchReq.postTask(user);
    } catch (error) {
      console.error(error);
    }
  }

   getTaskRequest(taskId) {
    try {
       this.fetchReq.getTask(taskId);
    } catch (error) {
      console.error(error);
    }
  }

   getAllTasksRequest(isImportant, name_like, isCompleted) {
    try {
       this.fetchReq.getAllTask(isImportant, name_like, isCompleted);
    } catch (error) {
      console.error(error);
    }
  }

   patchTaskRequest(user, taskId) {
    try {
       this.fetchReq.patchTask(user, taskId);
    } catch (error) {
      console.error(error);
    }
  }

   deleteTaskRequest(taskId) {
    try {
       this.fetchReq.deleteTask(taskId);
    } catch (error) {
      console.error(error);
    }
  }
}
