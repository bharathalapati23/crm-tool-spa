import axios from 'axios'

const url = 'http://localhost:5000/enquiry'

export const createEnquiry = (newPost) => {
    console.log(newPost)
    axios.post(url, newPost)
}

export const getEnquiries = () => {
    return axios.get(url)
}

export const addComment = (addCommentBody) => {
    return axios.post(url + '/addComment', addCommentBody)
}

