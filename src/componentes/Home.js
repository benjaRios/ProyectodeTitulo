import React from 'react'
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div>
        <Sidebar />
        <div class="card">
            <h5 class="card-header">Información</h5>
            <div class="card-body">
                <h5 class="card-title">Problematica</h5>
                 <p class="card-text"> Información Masiva</p>
                 
                
            </div>
        </div>
    </div>
  )
}

export default Home;