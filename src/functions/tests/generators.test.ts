import { createObjArray } from '../generators'
// MOCKS
import mocks from '../mocks/generators.mocks.json'

describe('Generators', () => {
  test('createObjArray', () => {
    const basicRun = createObjArray()
    expect(basicRun).toStrictEqual(mocks.createObjArray.basicExamples)

    const externalParserRun = createObjArray({
      externalParser: i => ({ external: `${++i * 2}` })
    })
    expect(externalParserRun).toStrictEqual(
      mocks.createObjArray.externalParserExamples
    )
  })
})
