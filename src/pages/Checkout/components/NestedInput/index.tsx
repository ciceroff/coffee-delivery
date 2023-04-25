import { useFormContext } from 'react-hook-form'
import { NestedInputContainer } from './styles'

export function NestedInput() {
  const { register } = useFormContext()

  return (
    <NestedInputContainer>
      <input
        required
        type="text"
        placeholder="CEP"
        size={15}
        {...register('cep')}
      />{' '}
      <input
        form="addressForm"
        required
        type="text"
        placeholder="Rua"
        size={55}
        {...register('rua')}
      />
      <input
        form="addressForm"
        required
        type="text"
        placeholder="Número"
        size={15}
        {...register('numero')}
      />
      <input
        form="addressForm"
        required
        type="text"
        placeholder="Complemento"
        size={35}
        {...register('complemento')}
      />
      <input
        required
        form="addressForm"
        type="text"
        placeholder="Bairro"
        size={15}
        {...register('bairro')}
      />
      <input
        form="addressForm"
        required
        type="text"
        placeholder="Cidade"
        size={25}
        {...register('cidade')}
      />
      <input
        form="addressForm"
        required
        type="text"
        placeholder="UF"
        size={5}
        {...register('UF')}
      />{' '}
    </NestedInputContainer>
  )
}
