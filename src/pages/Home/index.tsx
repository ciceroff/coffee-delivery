import { Coffees, HomeContainer } from './styles'
import img from '../../assets/Imagem.svg'
import { Coffee } from '../../components/Coffee'
import {
  arabe,
  cafeComleite,
  capuccino,
  chocolateQuente,
  cubano,
  expresso,
  expressoAmericano,
  expressoCremoso,
  expressoGelado,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mocaccino,
} from '../../assets'

const coffees = [
  {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    title: 'Árabe',
    img: arabe,
  },
  {
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'Café com Leite',
    img: cafeComleite,
  },
  {
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'Capuccino',
    img: capuccino,
  },
  {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: 'Chocolate Quente',
    img: chocolateQuente,
  },
  {
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: 'Cubano',
    img: cubano,
  },
  {
    description: 'O tradicional café feito com água quente e grãos moídos',
    title: 'Expresso Tradicional',
    img: expresso,
  },
  {
    description: 'Expresso diluído, menos intenso que o tradicional',
    title: 'Expresso Americano',
    img: expressoAmericano,
  },
  {
    description: 'Café expresso tradicional com espuma cremosa',
    title: 'Expresso Cremoso',
    img: expressoCremoso,
  },
  {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    title: 'Expresso Gelado',
    img: expressoGelado,
  },

  {
    description: 'Bebida adocicada preparada com café e leite de coco',
    title: 'Havaiano',
    img: havaiano,
  },
  {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: 'Irlandês',
    img: irlandes,
  },
  {
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'Latte',
    img: latte,
  },
  {
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'Macchiato',
    img: macchiato,
  },
  {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: 'Mocaccino',
    img: mocaccino,
  },
] as const

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
      <Coffees>
        {coffees.map((coffee) => {
          return (
            <Coffee
              key={coffee.title}
              description={coffee.description}
              img={coffee.img}
              title={coffee.title}
            ></Coffee>
          )
        })}
      </Coffees>
    </HomeContainer>
  )
}
