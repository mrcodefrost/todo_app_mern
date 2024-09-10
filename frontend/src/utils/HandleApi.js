import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then((response) => {
        setToDo(response.data);
        console.log('Response data from Get All todos',response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}


const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.log(error);
    });
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    axios
    .put(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.log(error);
    });
}

const deleteToDo = (toDoId, setToDo) => {
    axios
    .delete(`${baseUrl}/delete`, {
        data: { _id: toDoId }, // Properly sending the request body using `data`
      })
    .then((res) => {
        console.log('Todo ID ::::::',toDoId);
        console.log(res);
        console.log(res.data);
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.log(error);
    });
}


export {getAllToDo, addToDo, updateToDo, deleteToDo}