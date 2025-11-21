import React from 'react'
// COMPONENTS
import { Tag } from '@components/atoms'
// TYPES & INTERFACES
import { TagListProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const TagList: React.FC<TagListProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  listOfTags
}) => {
  const tagListClasses = parseClasses(['tags', cssClasses])
  const tagListTestId =
    testId ?? parseTestId({ tag: 'tags', parsedClasses: tagListClasses })

  return (
    <section
      data-testid={tagListTestId}
      className={tagListClasses}
      style={style ?? undefined}
    >
      {listOfTags.map(_tagConfig => (
        <Tag
          key={`tag-list-item-${generateKey()}`}
          {..._tagConfig}
        />
      ))}
    </section>
  )
}

export default TagList
