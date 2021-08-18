import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
        <div className='footer-container'>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How we work</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MEDICAL CENTER
              <i class='fas fa-user-md' />
            </Link>
          </div>
          <small class='website-rights'>Copyright @ 2021 Medical center. All Right Reserved.</small>
          <div class='social-icons'>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>

       /* <footer className="footer">
          <ul>
              <li>
                  <button>Home</button>
              </li>
          </ul>
          <ul>    
              <li>
                  <button>Privacy Policy</button>
              </li>
          </ul>

          <ul>
              <li>
                  <button>About Us</button>
              </li>
          </ul>
          <ul>    
              <li>
                  <button>Contact Us</button>
              </li>
          </ul>
          <ul>    
              <li>
                  <button>Social Media</button>
              </li>
              </ul>
              <div className='footer-container'>
                  <Link to='/' className='social-logo'>
                      Facebook <i className='fab fa-facebook-f'/>
                  </Link>
              </div>
          <ul>
              <li>ALL RIGHT RESERVED</li>
          </ul>


        </footer>*/
    )
}

export default Footer
