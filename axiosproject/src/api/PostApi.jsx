import axios from 'axios';
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