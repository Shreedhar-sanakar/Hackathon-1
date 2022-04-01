// async function
async function getUser() {
    let users;
    debugger;
    try {
      // await response of fetch call
      const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");//await is used inside the async
      users = await data.json();// only proceed once promise is resolved
      console.log(data);
    } catch (error) {//to handle errors in async and await
      console.log(error);//we have try-catch block
    }
    return users;
  }
  // async function
  async function displayUser(user) {
      let users = await getUser();
    const userList = document.querySelector(".user-list"); // Match the  Select classs first div
    userList.innerHTML = "";//select add content
    
    
    for(var j = 0; j < 100; j++) {//loop (0-100) data from API
      //select add content HTML elements should be created with DOM.
      userList.innerHTML += `
      <div class="user-container">
      <img  class="user-avatar" src="${users[j].image_link}" alt="${users[j].name}">
      <div>
      
      <h2>Brand : ${users[j].brand}</h2>
      <h2>Name : ${users[j].name}</h2>
      <h3>Price : ${users[j].price}</h3>
      <p>Description : ${users[j].description}</p>
   
      <button onClick="deleteUser(${users[j].id})">Delete</button>
      </div> 
      </div>
      `;
     // you want to delete items display and created delete button
     // display the  product name,product brand,product price,and product description
          
    
  }  
  }
  
  displayUser();//function call
  
  