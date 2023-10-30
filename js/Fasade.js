 class Fasade {
  fetchReq;

  constructor() {
    this.fetchReq = new FetchReq();
  }

  async postTaskRequest(user) {
    try {
      await this.fetchReq.postTask(user);
    } catch (error) {
      console.error(error);
    }
  }

  async getTaskRequest(taskId) {
    try {
      await this.fetchReq.getTask(taskId);
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTasksRequest(isImportant, name_like, isCompleted) {
    try {
      await this.fetchReq.getAllTask(isImportant, name_like, isCompleted);
    } catch (error) {
      console.error(error);
    }
  }

  async patchTaskRequest(user, taskId) {
    try {
      await this.fetchReq.patchTask(user, taskId);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTaskRequest(taskId) {
    try {
      await this.fetchReq.deleteTask(taskId);
    } catch (error) {
      console.error(error);
    }
  }
}
