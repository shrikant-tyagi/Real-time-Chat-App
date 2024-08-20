import './addUser.scss'

const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input type='text' placeholder='Username'/>
            <button>Search</button>
        </form>
        <div className='user'>
            <div className='details'>
                <img src='./avatar.png' alt=''/>
                <span>Jane Doe</span>
            </div>
            <button>Add</button>
        </div>
    </div>
  )
}

export default AddUser