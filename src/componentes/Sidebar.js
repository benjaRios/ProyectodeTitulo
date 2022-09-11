import React from 'react'
import Home from './Home';

export const Sidebar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/dashboard" >Dashboard</a>
              <a class="nav-link" href="#">Perfil</a>
              
            </div>
          </div>
        </div>
      </nav>
    
      
    </div>
  )
}


export default Sidebar;