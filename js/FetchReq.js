 class FetchReq {
  static _url='http://37.220.80.108';


  // POST 
   async postTask (user) {
    let userData = {
        name: user.getName(),
        info: user.getInfo(),
        isImportant: user.getIsImportant(),
      };

    try {

       let _postUrl = FetchReq._url + '/tasks';
       const response=await fetch(_postUrl, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        }
       });
       const data=await response.json();

       if (response.ok) {
        return console.log(data);
       } else {
        throw new Error(`Ошибка! Статус ${response.status}`)
       }
    }
    catch (error) {
      console.log (error);
    }
  }

// GET 
   async getTask (taskId) {
    try {
       let _getUrl = FetchReq._url + `/tasks/${taskId}`;
       const response=await fetch(_getUrl, {
        method: 'GET'
       });
       const data=await response.json();
       if (response.ok) {
        return console.log (data);
       } else {
        throw new Error(`Ошибка! Статус ${response.status}`)
       }
    }
    catch (error) {
      console.log (error);
    }
  }

// GETALLTASKS
 async getAllTask (isImportant, name_like ,isCompleted) {
  try {
     let _getUrlAll = FetchReq._url  + `/tasks?`+`isImportant=${isImportant}&`+`name_like=${name_like}&`+`isCompleted=${isCompleted}`;
     const response=await fetch(_getUrlAll, {
      method: 'GET'
     });
     const data=await response.json();
     if (response.ok) {
      return console.log (data);
     } else {
      throw new Error(`Ошибка! Статус ${response.status}`)
     }
  }
  catch (error) {
    console.log (error);
  }
}

//PATCH
   async patchTask (user,taskId) {

    let userData={
      name: user.getName(),
      info: user.getInfo(),
      isImportant: user.getIsImportant(),
      isCompleted: user.getIsCompleted()
      }
    try {
       let _patchTask =FetchReq._url  + `/tasks/${taskId}`;
       const response=await fetch(_patchTask, {
        method: 'PATCH',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        }
       });
       const data=await response.json();
       if (response.ok) {
        return console.log (data);
       } else {
        throw new Error(`Ошибка! Статус ${response.status}`)
       }
    }
    catch (error) {
      console.log (error);
    }
  }

//DELETE
   async deleteTask (taskId) {
    try {
       let _deleteTask = FetchReq._url  + `/tasks/${taskId}`;
       const response=await fetch(_deleteTask, {
        method: 'DELETE',
       });
       const data=await response.json();
       if (response.ok) {
        return console.log (data);
       } else {
        throw new Error(`Ошибка! Статус ${response.status}`)
       }
    }
    catch (error) {
      console.log (error);
    }
  }
}

