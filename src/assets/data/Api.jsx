import data from './project.json'

async function getProjects () {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 150)
    })}

export default {getProjects}