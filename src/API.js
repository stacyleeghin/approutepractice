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
        return axios.get(urlPrefix+'/projects',data)
    },
    updateProjects : (id,data) => {
        return axios.put(urlPrefix+'/projects/'+id,data)
    },
    deleteProject : (id,data) => {
        return axios.delete(urlPrefix+'/projects/'+id)
    }
}
export default API;

