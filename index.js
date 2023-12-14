document.getElementById('user-list').addEventListener('click', function (event) {
    const target = event.target;
  
    if (target.classList.contains('edit-btn')) {
      // Handle edit button click
      const userElement = target.closest('.user');
      if (userElement) {
        const userId = userElement.getAttribute('data-user-id');
        const userName = userElement.querySelector('strong').textContent;
        const userEmail = userElement.querySelector('strong ~ strong').textContent;
  
        // Populate the form with user details
        document.getElementById('user-id').value = userId;
        document.getElementById('name').value = userName.split(':')[1].trim();
        document.getElementById('email').value = userEmail.split(':')[1].trim();
      }
    } else if (target.classList.contains('delete-btn')) {
      // Handle delete button click
      const userElement = target.closest('.user');
      if (userElement) {
        const userId = userElement.getAttribute('data-user-id');
  
        // Perform delete operation (code from previous examples)
        //const apiUrl = `https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/apointmentData/${657b44bf831c5703e89e0880}`;
        axios.delete(`https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/apointmentData/${657b44bf831c5703e89e0880}`)
          .then(response => {
            console.log('DELETE request successful:', response.data);
            userElement.remove(); // Remove the user detail from the website
          })
          .catch(error => {
            console.error('Error making DELETE request:', error);
          });
      }
    }
  });
  
  document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Retrieve user details from the form
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    const userId = document.getElementById('user-id').value;
  
    // Update the user details on the website (optional)
    const userElement = document.querySelector(`.user[data-user-id="${657b44bf831c5703e89e0880}]"`);
    if (userElement) {
      userElement.querySelector('strong').textContent = `name: ${newName}`;
      userElement.querySelector('strong ~ strong').textContent = `email: ${newEmail}`;
    }
  
    // Update the user details with a PUT or PATCH request
    //const apiUrl = `https://crudcrud.com/api/1215395a287647b4b3a5f84b9d8aec2b/apointmentData/${657b44bf831c5703e89e0880}`;
    axios.put(`https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/apointmentData/${657b44bf831c5703e89e0880}`, {
      name: newName,
      email: newEmail
    })
    .then(response => {
      console.log('PUT request successful:', response.data);
    })
    .catch(error => {
      console.error('Error making PUT request:', error);
    });
  
    // Reset the form
    document.getElementById('user-form').reset();
  });
  