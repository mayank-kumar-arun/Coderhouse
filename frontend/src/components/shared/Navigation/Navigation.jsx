import { Link, Navigate } from "react-router-dom";
import styles from './Navigation.module.css'
import { useDispatch , useSelector} from "react-redux";
import { logout } from '../../../http';
import { setAuth } from '../../../store/authSlice';

const Navigation = () =>{
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };

    const dispatch = useDispatch();
    // const { isAuth, user } = useSelector((state) => state.auth);
    async function logoutUser() {
        try {
            const { data } = await logout();
            dispatch(setAuth(data));
            <Navigate to='/' replace />
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to={'/'}>
                <img src="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-3/frontend/public/images/logo.png" alt="logo"></img>
                <span style={logoText}>Codershouse</span>
            </Link>

            <button onClick={logoutUser}>logout</button>



        </nav>
    )
    
}

export default Navigation;