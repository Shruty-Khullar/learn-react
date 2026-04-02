import axios from 'axios';
// axios.create() → creates a pre-configured Axios client
// api → the variable storing that client, api is an object (Axios instance) that you can use to make HTTP requests.
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPost = () => {
    //resp will be a promise as get returns a promise, so either we need to use .then or async await to process promises
    return api.get('/posts');
}

export const deletePost = (id) => {
    // return api.delete(`/posts/${id}`);
    return api.delete(`/posts/${id}`);
}

export const postData = (post) => {
    //post is data we want tp add -> so 1st arg is API and second is payload 
    return api.post('/posts', post);
}

export const putData = (id, post) => {
    return api.put(`/posts/${id}`, post);
}