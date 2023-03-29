import { HomeContainer } from './styles'
import img from '../../assets/Imagem.svg'

export function Home() {
  return (
    <HomeContainer>
      <main>
        <div>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <img src={img} alt="" />
      </main>

      <h1>Nossos cafés</h1>
    </HomeContainer>
  )
}
