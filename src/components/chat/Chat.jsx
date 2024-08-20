import { useEffect, useRef, useState } from 'react'
import './chat.scss'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open , setOpen] = useState(false);
  const [message , setMessage] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[]);

  function handleEmoji(e){
    console.log(e.emoji);
    setMessage(prev => {
      return prev+e.emoji;
    })
  }

  return (
    <div className='chat'>

      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt=''/>
          <img src='./video.png' alt=''/>
          <img src='./info.png' alt=''/>
        </div>
      </div>

      <div className='center'>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.lorem ips dolor sit amejr dolor sit amet lorem ip</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.lorem ips dolor sit amejr dolor sit amet lorem ip</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <img src='https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className='bottom'>
        <div className='icons'>
            <img src='./img.png' alt='' />
            <img src='./camera.png' alt='' />
            <img src='./mic.png' alt='' />
        </div>
        <input type='text' placeholder='Type a message...' value={message} 
          onChange={(e) => setMessage(prev => {
            setOpen(false);
            return e.target.value;
          })}/>
        <div className='emoji'>
          <img src='./emoji.png' alt='' onClick={() => setOpen(prev => !prev)}/>
          <div className='emojiPicker'>
            {
              open && <EmojiPicker onEmojiClick={handleEmoji}/>
            }
          </div>

        </div>
        <button className='sendButton'>Send</button>
      </div>
      
    </div>
  )
}

export default Chat