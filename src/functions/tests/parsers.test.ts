import { parseClasses } from '../persers'
// MOCKS
import mocks from '../mocks/parsers.mocks.json'

describe('Parsers', () => {
  test('Should return a string of classes from an array', () => {
    mocks.inputs.forEach((_input, i) => {
      const parseResult = parseClasses(_input)
      expect(parseResult).toBe(mocks.outputs[i])
    })
  })
})
