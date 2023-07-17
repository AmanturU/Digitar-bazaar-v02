import React from "react";
import "./Header.css";
import { BsCart3 } from 'react-icons/bs';
import { GoMoon } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';

function Header(props) {
  return (
    <header>
      <div className="topheader">
        <div className="topleftheader">
          <span className='artbit-main'>Art</span>
          <span className='artbit'>BIT</span>
          <form>
            <div class="browse-search-find">
                <input class="browse-search" type="search" name="username" placeholder="Search Here" required />
                <button class="browse-btn">
                <BiSearch className="browse-search-img" />
                </button>
            </div>
          </form>

        </div>
        <div className="toprightheader">
          <select className="selects" placeholder='Select option'>
          <option value="">Explore</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          </select>
          <select className="selects" placeholder='Select option'>
          <option value="">Stats</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <h3 className="selects">Create</h3>
        </div>
        {/* <div className="profile-picture"></div> */}
        <BsCart3 className='cart' />
        <GoMoon className='cart cart1' />
      </div>
      <div className="second-Header"> Connect your wallet</div>
      <div className="bottom-Header">
        <p className="bottom-word-home">Home /</p>
        <h2 className="bottom-word-home"> Connect your wallet</h2>
      </div>
    </header>
  )
}

export default Header