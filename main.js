import './style.scss'

import { skills, projects } from "./data/db.json"

/* Skill Grid */
const grid_container = document.querySelector('.grid-container')

skills.forEach( (skill) => {
  const grid_item = document.createElement('div')
  grid_item.className = 'grid-item'
  grid_item.innerHTML = `
    <div class='skill-header'>
      <img/>
      <span></span>
    </div>
    <p></p>
  `

  grid_item.querySelector('img').alt = skill.name
  grid_item.querySelector('img').src = skill.src
  grid_item.querySelector('span').textContent = skill.name
  grid_item.querySelector('p').textContent = skill.description
  
  grid_container.appendChild(grid_item)
})

/* Projects */
const card_container = document.querySelector('.card-container')

projects.forEach( (project) => {
  const card_url = document.createElement('a')
  card_url.className = "project-link"
  card_url.href = project.link
  card_url.target = "_blank"

  const card_item = document.createElement('div')
  card_item.className = 'card'

  card_item.innerHTML = `
    <img />
    <div class="project-info">
      <div class="project-name"></div>
      <div class="project-context"></div>
      <div class="tool-set"></div>
    </div>

  `
  const card_img = card_item.querySelector('img')
  card_img.src = project.src
  card_img.alt = project.name

  const project_name = card_item.querySelector('.project-name')
  project_name.textContent = project.name

  const project_context = card_item.querySelector('.project-context')
  project_context.textContent = project.context

  const project_tool_set = card_item.querySelector('.tool-set')
  project.tools.forEach( (tool) => {
    const project_tool = document.createElement('span')
    project_tool.className = 'tool'
    project_tool.textContent = tool
    project_tool_set.appendChild(project_tool)
  })

  card_url.appendChild(card_item)
  card_container.appendChild(card_url)

})
