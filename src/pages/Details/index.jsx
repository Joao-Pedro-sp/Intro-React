import { Container } from './styles';

import { Button } from '../../components/Button'

export function Details(){
  return(
    <Container>
      <h1>Hello Word!</h1>
      <span>Joao pedro</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
    
  )
}