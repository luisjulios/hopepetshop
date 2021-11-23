import React from 'react'

const navbarStyle = {
  backgroundColor: '#fff',
  borderRadius: '1rem',
  width: '100%',
  height: 'auto',
  margin: '2rem',
  }
  const ulStyle = {
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
  const liStyle = {
    backgroundColor: '#7BA68D',
    borderRadius: '5rem',
    margin: '1rem',
    width: '10rem',
    height: '3rem',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
function NavBar() {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
      <li style={liStyle}><a href="/">Home</a></li>
      <li style={liStyle}><a href="/">Catálogo</a></li>
      <li style={liStyle}><a href="/">Nuestros clientes</a></li>
      <li style={liStyle}><a href="/">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
