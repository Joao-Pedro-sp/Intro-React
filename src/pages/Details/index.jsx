import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introducao ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam pariatur tenetur voluptatum maiores. Fugiat nam blanditiis culpa non? Placeat tenetur magni, natus molestias eos commodi quae debitis aut eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam pariatur tenetur voluptatum maiores. Fugiat nam blanditiis culpa non? Placeat tenetur magni, natus molestias eos commodi quae debitis aut eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam pariatur tenetur voluptatum maiores. Fugiat nam blanditiis culpa non? Placeat tenetur magni, natus molestias eos commodi quae debitis aut eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam pariatur tenetur voluptatum maiores. Fugiat nam blanditiis culpa non? Placeat tenetur magni, natus molestias eos commodi quae debitis aut eius?
          </p>

          <Section title="Links uteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
    
  )
}