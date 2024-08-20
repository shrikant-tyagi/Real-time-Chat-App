import { useState } from 'react';
import './chatList.scss';
import AddUser from './addUser/AddUser';

const ChatList = () => {

  const [addMode , setAddMode] = useState(false);

  return (
    <div className='chatList'>

        <div className='search'>
            <div className='searchBar'>
                <img src='./search.png' />
                <input type='text' placeholder='Search'/>
            </div>
            <div className='add'>
              <img src={addMode ? './minus.png' : './plus.png'}
                onClick={() => setAddMode(prev => !prev)}
              />
            </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
        <div className='item'>
          <img src='./avatar.png' alt=''/>
          <div className='texts'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        {
          addMode && <AddUser />
        }
        
    </div>
  )
}

export default ChatList