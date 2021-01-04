import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProjects } from '../features/project/projectSlice'

const ProjectsList = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.project.status)
  const projects = useSelector((state) => state.project.projects)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects())
    }
  }, [status, dispatch])

  switch (status) {
    case 'succeeded':
      return (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )
    default:
      return <p>{status}</p>
  }
}

export default ProjectsList
