import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FolderOpen, HighlightOff } from '@material-ui/icons'

import { fetchProjects } from '../features/project/projectSlice'

const StyledProjectsListHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  padding-bottom: 12px;

  p {
    margin: 0;
  }
  select {
    border: none;
  }
`

const ProjectsListHeader = () => (
  <StyledProjectsListHeader>
    <p>All Projects</p>
    <select>
      <option>Sort By Date Created</option>
      <option>Title</option>
    </select>
  </StyledProjectsListHeader>
)

const StyledProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    height: 44px;
    padding: 8px 12px;
    border-bottom: 1px solid #ccc;

    .project-brief {
      flex-grow: 1;
      padding-left: 36px;
      position: relative;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      svg {
        position: absolute;
        left: 0;
        top: 0;
      }
      p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }
      span {
        font-size: 12px;
        em {
          margin-left: 8px;
          font-weight: bold;
        }
      }
    }
    .portfolio-count,
    .project-deletion {
      flex-basis: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .portfolio-count span {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #ccc;
      line-height: 36px;
    }
    .project-deletion {
      flex-basis: 48px;

      svg {
        display: none;
      }
    }
  }

  li:hover {
    .project-deletion svg {
      display: initial;
    }
  }
`

const ProjectsList = ({ projects }) => (
  <StyledProjectsList>
    {projects.map((project) => (
      <li key={project.id}>
        <div className="project-brief">
          <FolderOpen />
          <p>{project.name}</p>
          <span>
            created<em>a day ago</em>
          </span>
        </div>
        <div className="portfolio-count">
          <span>0</span>
        </div>
        <div className="project-deletion">
          <HighlightOff />
        </div>
      </li>
    ))}
  </StyledProjectsList>
)

const StyledLoading = styled.div`
  padding: 20px;
`

const Loading = () => (
  <StyledLoading>
    <CircularProgress />
  </StyledLoading>
)

const StyledProjectsListBox = styled.section`
  width: 75%;
  margin: 0 auto;
  padding: 20px;
`

const ProjectsListBox = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.project.status)
  const projects = useSelector((state) => state.project.projects)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects())
    }
  }, [status, dispatch])

  return (
    <StyledProjectsListBox>
      <ProjectsListHeader />
      {status === 'succeeded' && <ProjectsList projects={projects} />}
      {(status === 'idle' || status === 'loading') && <Loading />}
    </StyledProjectsListBox>
  )
}

export default ProjectsListBox
