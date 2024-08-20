import './detail.scss'

const Detail = () => {

  

  return (
    <div className='detail'>
      <div className='userInfo'>
        <img src='./avatar.png' alt='' />
        <p>John Doe</p>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>

      <div className='info'>
          <div className='title'>
            <span>Chat Settings</span>
            <div className='image'>
              <img src='./arrowUp.png' alt=''/>
            </div>
          </div>

          <div className='title'>
            <span>Privacy & help</span>
            <div className='image'>
              <img src='./arrowUp.png' alt=''/>
            </div>
          </div>

          <div className='title'>
            <span>Shared photos</span>
            <div className='image'>
              <img src='./arrowDown.png' alt=''/>
            </div>
          </div>

          <div className='photos'>
            <div className='photoItem'>
              <img src='https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='' />
              <span>photo_2024_2.png</span>
            </div>
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <img src='https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='' />
              <span>photo_2024_2.png</span>
            </div>
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <img src='https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='' />
              <span>photo_2024_2.png</span>
            </div>
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <img src='https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='' />
              <span>photo_2024_2.png</span>
            </div>
          </div>

          <div className='title'>
            <span>Shared files</span>
            <div className='image'>
              <img src='./arrowUp.png' alt=''/>
            </div>
          </div>
      </div>

      <div className='buttons'>
        <button className='block'>Block User</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail