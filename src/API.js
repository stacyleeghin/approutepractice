import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {

    getProjects : () => {
        return axios.get(urlPrefix+'/projects')
    },
    getSingleProject : (id) => {
        return axios.get(urlPrefix+'/projects/'+ id)
    },
    addProjects : (data) => {
        return axios.post(urlPrefix+'/projects',data)
    },
    updateProjects : (id,data) => {
        return axios.put(urlPrefix+'/projects/'+id,data)
    },
    deleteProjects : (id,data) => {
        return axios.delete(urlPrefix+'/projects/'+id)
        
    },
    getSingleType : (id) => {
        return axios.get (urlPrefix+'/types/'+id)
    }, 
    getTypes : () => {
        return axios.get (urlPrefix+'/types')
    }, 
    addUser : (data) => {
        return axios.post (urlPrefix+'/users',data)
    }

}
export default API

