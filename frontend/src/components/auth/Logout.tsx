import Button from '../ui/Button';
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const navigate = useNavigate();

    const onLogoutButtonClick = async () => {
        localStorage.removeItem("jwt")
        navigate('/login')
    }

  return (
    <Button
        label='Logout'
        onClickHandler={onLogoutButtonClick}
    >
    </Button>
  )
}

export default Logout;