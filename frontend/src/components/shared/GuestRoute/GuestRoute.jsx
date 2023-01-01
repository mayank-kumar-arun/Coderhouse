import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = ({  children }) => {
  const { isAuth} = useSelector((state) => state.auth);
    if (isAuth) {
      return <Navigate to="/activate" replace />
    }
  return children;
};
export default GuestRoute;