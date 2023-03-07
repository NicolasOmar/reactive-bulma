import { parseClasses, parseTestId } from '../persers'
// MOCKS
import mocks from '../mocks/parsers.mocks.json'

describe('Parsers', () => {
  test('parseClasses', () => {
    mocks.parseClasses.inputs.forEach((_input, i) => {
      const parseResult = parseClasses(_input)
      expect(parseResult).toBe(mocks.parseClasses.outputs[i])
    })
  })

  test('parseTestId', () => {
    mocks.parseTestId.inputs.forEach((_input, i) => {
      const parseResult = parseTestId({ tag: 'button', parsedClasses: _input })
      expect(parseResult).toBe(mocks.parseTestId.outputs[i])
    })
  })
})
