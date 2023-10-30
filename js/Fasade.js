 class Fasade {
  fetchReq;

  constructor() {
    this.fetchReq = new FetchReq();
  }

   postTaskRequest(user) {
       this.fetchReq.postTask(user);
  }

   getTaskRequest(taskId) {
       this.fetchReq.getTask(taskId);
  }

   getAllTasksRequest(isImportant, name_like, isCompleted) {
       this.fetchReq.getAllTask(isImportant, name_like, isCompleted);
  }

   patchTaskRequest(user, taskId) {
       this.fetchReq.patchTask(user, taskId);
  }

   deleteTaskRequest(taskId) {
       this.fetchReq.deleteTask(taskId);
  }
}
