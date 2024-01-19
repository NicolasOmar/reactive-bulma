// TYPES & INTERFACES
import { GenericObjectProps } from '../interfaces/commonProps'
import { CreateObjArrayProps } from '../interfaces/functionProps'

export const generateKey = (max: number = 5000, min: number = 1): string => {
  max = Math.floor(max)
  min = Math.ceil(min)
  const secureRandomNumbers = new Uint32Array(1)
  window.crypto.getRandomValues(secureRandomNumbers)

  return Math.floor(secureRandomNumbers[0] * (max - min) + min).toString()
}

export const createObjArray = <ImportedProps>({
  numberOfItems = 3,
  externalParser
}: CreateObjArrayProps = {}): ImportedProps[] | GenericObjectProps[] =>
  Array(numberOfItems)
    .fill(null)
    .map((_, i) => (externalParser ? externalParser(i) : { text: `${++i}` }))
