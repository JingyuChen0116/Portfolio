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