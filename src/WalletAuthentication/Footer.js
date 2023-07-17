import React from 'react'
import './Footer.css'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

  const TwtCl = () => {
    window.open('https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru', '_blank');
  }
  const InsCl = () => {
    window.open('https://www.instagram.com', '_blank');
  }
  const FbCl = () => {
    window.open('https://ru-ru.facebook.com', '_blank');
  }

function Footer() {
  return (
    <div className='Mainfooter'>
      <div className='TopFooter'>
        <div className='TopleftFooter'> 
          <span className='artbit-main'>Art</span>
          <span className='artbit'>BIT</span>
          <div className='Enter-email'>Enter your email to get notified by ArtBit for latest <br /> updates</div>
          <div className='footer-icons'>
            <BsTwitter className='twitter' onClick={TwtCl} />
            <BsInstagram className='twitter' onClick={InsCl} />
            <FaFacebookSquare className='twitter' onClick={FbCl} />
          </div>
          <div>
          <form>
            <div class="browse-search-div">
                <input class="browse-search" type="search" name="username" placeholder="Email Adress" required />
                <button class="browse-btn">
                <img class="browse-search-img" src="https://cdn.icon-icons.com/icons2/1144/PNG/512/rightarrow1_80967.png" alt="" />
                </button>
            </div>
          </form>
          </div>
        </div>
        <div className='righttopfooter'>
          <div className='toprightfooter'>
            <p className='topfooter-1'>ArtBit</p>
            <p className='topfooters'>Explore</p>
            <p className='topfooters'>All NFTs</p>
            <p className='topfooters'>About</p>
          </div>
          <div className='toprightfooter'>
            <p className='topfooter-1'>My Account</p>
            <p className='topfooters'>Profile</p>
            <p className='topfooters'>Favourites</p>
            <p className='topfooters'>Watchlist</p>
            <p className='topfooters'>My Collections</p>
            <p className='topfooters'>Settings</p>
          </div>
          <div className='toprightfooter'>
            <p className='topfooter-1'>Resources</p>
            <p className='topfooters'>Platform Status</p>
            <p className='topfooters'>Partners</p>
            <p className='topfooters'>Texas</p>
            <p className='topfooters'>Newsletter</p>
          </div>
          <div className='toprightfooter'>
            <p className='topfooter-1'>Community</p>
            <p className='topfooters'>Help Center</p>
            <p className='topfooters'>ArtBit Token</p>
            <p className='topfooters'>Suggest Features</p>
            <p className='topfooters'>Subscribe</p>
          </div>
        </div>
      </div>

      <div>
        <div className='bottom-footer'>
          <h3 className='Terms'>Terms</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>

      <div className='theBottomest'>Ⓒ Artbit, Inc @ All Rights Reserved</div>
    </div>
  )
}

export default Footer

