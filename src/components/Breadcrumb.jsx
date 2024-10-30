import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className='page-title'>
      <div className='container'>
        <h1>{pathnames[pathnames.lenght - 1]?.replace(/-/g, ' ') || 'Home'}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          {
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index +1).join('/')}`;

              return (
                <li key={to}>
                  { index === pathnames.lenght -1
                    ? (<span>{value.replace(/-/g, ' ')}</span>)
                    : (<link to={to}>{value.replace(/-/g, ' ')}</link>)}
                </li>
              );
            }) 
          }
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb;