import { RiShutDownLine } from 'react-icons/ri'
import{ Container, Profile, Logout } from './styles';

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/Joao-Pedro-sp.png"
          alt="foto do usuario"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Joao Pedro</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
