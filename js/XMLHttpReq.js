class XMLHttpReq {
  
  static _url = 'http://37.220.80.108';

  // POST
  static async postTask(user) {
    const userData = {
      name: user.getName(),
      info: user.getInfo(),
      isImportant: user.getIsImportant(),
    };

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const _postUrl = this._url + '/tasks';
      xhr.open('POST', _postUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          resolve(console.log (data));
        } else {
          reject(new Error(`Ошибка! Статус ${xhr.status}`));
        }
      };
      xhr.send(JSON.stringify(userData));
    });
  }
 

  //GET 
    static async getTask (taskId) {
      return new Promise((resolve, reject)=> {
        let _getUrl = this._url + `/tasks/${taskId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', _getUrl);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            resolve(console.log (data));
          } else {
            reject(new Error(`Ошибка! Статус ${xhr.status}`));
          }
        };
        xhr.send();
      });
    }
  
    static async getAllTask (isImportant, name_like ,isCompleted) {
      return new Promise((resolve, reject)=> {
        let _getUrlAll = this._url + `/tasks?`+`isImportant=${isImportant}&`+`name_like=${name_like}&`+`isCompleted=${isCompleted}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', _getUrlAll);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            resolve(console.log (data));
          } else {
            reject(new Error(`Ошибка! Статус ${xhr.status}`));
          }
        };
        xhr.send();
      });
    }
 
  
  //PATCH
    static async patchTask (user,taskId) {
  
      let userData={
        name: user.getName(),
        info: user.getInfo(),
        isImportant: user.getIsImportant(),
        isCompleted: user.getIsCompleted()
        }
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const _patchTask = this._url + `/tasks/${taskId}`;
          xhr.open('PATCH', _patchTask, true);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              const data = JSON.parse(xhr.responseText);
              resolve(console.log (data));
            } else {
              reject(new Error(`Ошибка! Статус ${xhr.status}`));
            }
          };
          xhr.send(JSON.stringify(userData));
        });
    }


    //DELETE 
    static async deleteTask (taskId) {
      return new Promise((resolve, reject)=> {
        let _deleteTask = this._url + `/tasks/${taskId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', _deleteTask);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            resolve(console.log (data));
          } else {
            reject(new Error(`Ошибка! Статус ${xhr.status}`));
          }
        };
        xhr.send();
      });
    }
  }