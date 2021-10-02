import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import '../index.css'
import axios from 'axios';
//import { useSelector } from 'react-redux';

const Home = () => {
    //const user = useSelector(selectUser);
    //console.log(user.id);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();       
        dispatch(logout());
    }

    axios.get(`https://testapi.teleskop.app/v2.0/users/me`)
    .then( res => {
        console.log(res);
    }) 

    return (
        <div className='div-1'>
            <div className='div-2'>
                <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='h1-login'>Welcome</h1>
                    <div className='layout-div'>  
                        <button className="btn">
                            Logout
                        </button>                      
                    </div>                   
                </form>        
            </div>
        </div>
  );
}

export default Home;

