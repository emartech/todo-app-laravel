const forms = document.querySelectorAll('form');

const todoAddHandler = event => {
   event.preventDefault();

   const form = event.target;
   const todoTitle = form.querySelector('[name="title"]').value;

   fetch('/api/item', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ title: todoTitle })
   })
       .then(() => {
           location.reload();
       })
       .catch(error => console.log(error));
};

const todoRemoveHandler = event => {
    event.preventDefault();

    const button = event.target;
    const form = button.parentNode;
    const listItem = button.parentNode.parentNode;
    const todoItemId = form.querySelector('[name=id]').value;

    fetch(`/api/item/${todoItemId}`, { method: 'DELETE' })
        .then(response => {
            location.reload();
        })
        .catch(error => console.log(error));
};

const todoCompletionHandler = event => {
    const todoItemId = event.target.parentNode.querySelector('[name=id]').value;

    fetch(`/api/item${todoItemId}`, { method: 'PUT' })
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
};

forms.forEach(form => {
    const addButton = form.querySelector('[name="add"]')
    const deleteButton = form.querySelector('[name="delete"]');
    const checkbox = form.querySelector('[name="is_completed"]');

    if (addButton) {
        form.addEventListener('submit', todoAddHandler);
    }

    if (deleteButton) {
        deleteButton.addEventListener('click', todoRemoveHandler);
    }

    if (checkbox) {
        checkbox.addEventListener('change', todoCompletionHandler);
    }
});
