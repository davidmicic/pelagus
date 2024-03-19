import Container from '../ui/Container';
import * as api from "../../api/api"
import Input from '../ui/Input';
import { useForm } from '../hooks/useForm';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Error from '../errors/Error';
import { useState } from 'react';


const Login = () => {
  const navigate = useNavigate();
  const {
    form,
    onInputChange
  } = useForm({username: "", password: ""})
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onLoginButtonClick = async () => {
    try {
        const jwt = await api.login(form.username, form.password)
        localStorage.setItem("jwt", jwt)
        navigate('/')
    } catch(e: any) {
      setErrorMessage(e.message)
    }
  }

  return (
    <div className='text-center'>
      <Container
          header={
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-text sm:truncate sm:text-3xl sm:tracking-tight">
                Login
                </h2>
            </div>
          }
          body={
            <div>
              {errorMessage != '' && <Error message={errorMessage}/>}
              <Input placeholder={"Username"} name={"username"} type={"text"} id={"username"} label="Username" value={form.username} onChange={onInputChange} />
              <Input placeholder={"Password"} name={"password"} type={"password"} id={"password"} label="Password" value={form.password} onChange={onInputChange} />
            </div>
          }
          footer={
            <div>
              <Button label={"Login"} onClickHandler={onLoginButtonClick}/>
            </div>
          }
      >
      </Container>
    </div>
  )
}

export default Login;