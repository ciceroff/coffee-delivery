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

interface CoffeeInterface {
  readonly description: string
  readonly title: string
  readonly img: string
  subtitle: readonly string[]
}
const coffees: readonly CoffeeInterface[] = [
  {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    title: 'Árabe',
    img: arabe,
    subtitle: ['Especial'],
  },
  {
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'Café com Leite',
    img: cafeComleite,
    subtitle: ['Tradicional'],
  },
  {
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'Capuccino',
    img: capuccino,
    subtitle: ['Tradicional'],
  },
  {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: 'Chocolate Quente',
    img: chocolateQuente,
    subtitle: ['Especial'],
  },
  {
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: 'Cubano',
    img: cubano,
    subtitle: ['Especial'],
  },
  {
    description: 'O tradicional café feito com água quente e grãos moídos',
    title: 'Expresso Tradicional',
    img: expresso,
    subtitle: ['Tradicional'],
  },
  {
    description: 'Expresso diluído, menos intenso que o tradicional',
    title: 'Expresso Americano',
    img: expressoAmericano,
    subtitle: ['Tradicional'],
  },
  {
    description: 'Café expresso tradicional com espuma cremosa',
    title: 'Expresso Cremoso',
    img: expressoCremoso,
    subtitle: ['Tradicional'],
  },
  {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    title: 'Expresso Gelado',
    img: expressoGelado,
    subtitle: ['Tradicional'],
  },

  {
    description: 'Bebida adocicada preparada com café e leite de coco',
    title: 'Havaiano',
    img: havaiano,
    subtitle: ['Especial'],
  },
  {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: 'Irlandês',
    img: irlandes,
    subtitle: ['Especial'],
  },
  {
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'Latte',
    img: latte,
    subtitle: ['Tradicional'],
  },
  {
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'Macchiato',
    img: macchiato,
    subtitle: ['Tradicional'],
  },
  {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: 'Mocaccino',
    img: mocaccino,
    subtitle: ['Tradicional'],
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
              subtitle={coffee.subtitle}
            ></Coffee>
          )
        })}
      </Coffees>
    </HomeContainer>
  )
}
