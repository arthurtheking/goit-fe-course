import model from "./model";


const refs = {
   addPostBtn: document.querySelector('button[data-action="add"]'),
   deletePostBtn: document.querySelector('button[data-action="delete"')
};

refs.addPostBtn.addEventListener('click', () => {
    
    model.add({
        title: 'title 1', 
        body: 'body 1',
        createdAt:  new Date().toLocaleTimeString()
    })
    .then(addedItem => {
        console.log(addedItem);
    });
})


refs.deletePostBtn.addEventListener('click', () => {
    model.delete(2).then(deletedId => {
        console.log(`Post with id ${deletedId} wass successfully deleted`);
    })
})


