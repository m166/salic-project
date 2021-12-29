import projectsApi from 'resources/projects'

export const getProjects = payload => new Promise((resolve, reject) => {
  projectsApi.getProjects(payload).then(resolve).catch(reject)
})
