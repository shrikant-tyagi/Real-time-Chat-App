import { useState } from 'react';
import './login.scss';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {

    const [avatar , setAvatar] = useState({
        file:null,
        url:""
    })
    const [loading,setLoading] = useState(false);

    const handleAvatar = (e) => {
        if(e.target.files[0]){
            console.log(e.target.files);
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const {email , password} = Object.fromEntries(formData);

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        setLoading(false);
    }

    async function handleRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);

        const toastId = toast.loading("Loading...");
        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password);
            const imgUrl = await upload(avatar.file);
            // console.log("Reached 1");
            await setDoc(doc(db, "users" , res.user.uid),{
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked:[]
            })
            // console.log('Reached 2');
            await setDoc(doc(db, "userchats" , res.user.uid),{
                chats:[]
            })

            toast.success("User Registered successfully");

        } catch (error) {
            console.error("Error while authentication: ", error);
            toast.error(error.message);
        }
        setLoading(false);
        toast.dismiss(toastId);
    }

  return (
    <div className='login'>
        <div className='item'>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
                <input type='text' name='email' placeholder='Email'/>
                <input type='password' name='password' placeholder='Password'/>
                <button disabled={loading}>{!loading ? "Login" : "Loading"}</button>
            </form>
        </div>

        <div className='separator'></div>

        <div className='item'>
        <h2>Create Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor='file'>
                    <img src={avatar.url || './avatar.png'} alt='' />
                    <span>Upload an image</span>
                </label>
                <input type='file' id='file' style={{display:'none'}} onChange={handleAvatar}/>
                <input type='text' name='username' placeholder='Username' />
                <input type='text' name='email' placeholder='Email'/>
                <input type='password' name='password' placeholder='Password'/>
                <button disabled={loading}>{!loading ? "Sign In" : "Loading"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login