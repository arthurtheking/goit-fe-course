'Use strict'

const refs = {
    url : 'https://test-users-api.herokuapp.com/users/', 
    getUsersBtn : document.querySelector('.getUsersBtn'),
    formGetUsers : document.querySelector('.getUsersForm'),
    usersList : document.querySelector('.usersList'),
    userForm : document.querySelector('.getUserForm'),
    getUserId : document.querySelector('.getUserId'),
    getUserBtn : document.querySelector('.getUserBtn'),
    gainedUser : document.querySelector('.gainedUser'),
    setUserForm : document.querySelector('.setUserForm'),
    setUserBtn : document.querySelector('.setUserBtn'),
    setUserName : document.querySelector('.setUserName'),
    setUserAge : document.querySelector('.setUserAge'),
    settedUser : document.querySelector('.settedUser'),
    removeUserForm : document.querySelector('.removeUserForm'),
    removeUserId : document.querySelector('.removeUserId'),
    deleteUserBtn : document.querySelector('.deleteUserBtn'),
    deletedUser : document.querySelector('.deletedUser'),
    updatedUserForm : document.querySelector('.updateUserForm'),
    updUserId : document.querySelector('.updUserId'),
    updUserName : document.querySelector('.updUserName'),
    updUserAge : document.querySelector('.updUserAge'),
    updateUserBtn : document.querySelector('.updateUserBtn'),
    updatedUser : document.querySelector('.updatedUser')    
}

refs.formGetUsers.addEventListener("submit", handleFetchUsers);

function handleFetchUsers (e) {
    e.preventDefault();
    fetchUsers().then(updateUsersList);
}


function updateUsersList (users) {
    const array = users.data;
    const htmlstring = array.reduce((acc, user) => acc + createUserList(user), '');
    refs.usersList.innerHTML = htmlstring;
    document.querySelector('.usersList').style.display = 'block';
}


function createUserList ({
    id,
    name,
    age,
}) {
    return `<tr class="users__list">
    <td class="user__list__item">${id}</td>
    <td class="user__list__item">${name}</td>
    <td class="user__list__item">${age}</td>
    </tr>`;
};

function fetchUsers () {
    return fetch(refs.url)
    .then(response => {
        if(response.ok) return response.json();
        throw new Error('Error fetching data');
    })
    .catch(error => {
        console.error(`Error: `, error);
    })
}

// ????????????????????????????????????????????????????????????????????????????????????



refs.userForm.addEventListener('submit', handleFetchUser);

function handleFetchUser (e) {
    e.preventDefault();
    fetchUsers().then(getUserById)
}

function getUserById (users) {
    const arr = users.data;
    const user = arr.find(el => el.id === refs.getUserId.value);
    
    if (user === undefined) {
        refs.gainedUser.textContent = 'Taкого пользователя нет'
    } else {
        refs.gainedUser.innerHTML = `<ul class ="user--info">
        <li class ="user__id">Id: ${user.id}</li>
        <li class ="user__name">Name: ${user.name}</li>
        <li class ="user__age">Age: ${user.age}</li>
    </ul>`       
    }
}

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

refs.setUserForm.addEventListener('submit', handleSetUser);

function handleSetUser (e) {
    e.preventDefault();
    fetchNewUser();
    updateData();
};

function fetchNewUser () {
    fetch(refs.url, {
  method: 'POST',
  body: JSON.stringify({ 
      name: `${refs.setUserName.value}`,
      age:`${refs.setUserAge.value}` }),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .catch(error => console.error('Error ', error))
}

function updateData () {
    refs.settedUser.textContent = 'Пользователь успешно добавлен';
    refs.settedUser.style.background = "teal";
}

// ??????????????????????????????????????????????????????????????


refs.removeUserForm.addEventListener('submit', handleDeleteUser);


function handleDeleteUser (e) {
    e.preventDefault();
    fetchUsers().then(removeUser);
}

function removeUser (users) {
    const arr = users.data;
    const user = arr.find(el => el.id === refs.removeUserId.value);

    if (user === undefined) {
        refs.deletedUser.textContent = 'Taкого пользователя нет';
    } else {
        fetchRemoveUser();
        updateDataAfterRemove();
    }
} 


function fetchRemoveUser () {
    fetch(`https://test-users-api.herokuapp.com/users/${refs.removeUserId.value}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .catch(error => console.error('Error', error))
}

function updateDataAfterRemove () {
    refs.deletedUser.textContent = 'Пользователь был успешно удалён';
    refs.deletedUser.style.background = 'teal';
};


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


refs.updatedUserForm.addEventListener('submit', handleUpdateUser);


function handleUpdateUser (e) {
    e.preventDefault();
    fetchUsers().then(findUserForUpd);
}


function findUserForUpd (users) {
    const arr = users.data;
    const user = arr.find(el => el.id === refs.updUserId.value)

    if(user === undefined) {
        updatedUser.textContent = 'Такого пользователя нет';
    } else {
        fetchUpdateUser();
        updateDataAfterUpd();
    }
}


function updateDataAfterUpd () {
    refs.updatedUser.textContent = 'Пользователь был успешно обновлён';
    refs.updatedUser.style.background = 'teal';
}


function fetchUpdateUser () {
    fetch (`https://test-users-api.herokuapp.com/users/${refs.updUserId.value}`, {
        method : 'PUT',
        body: JSON.stringify({ 
            name: `${refs.updUserName.value}`,
            age:`${refs.updUserAge.value}` }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })
    
}