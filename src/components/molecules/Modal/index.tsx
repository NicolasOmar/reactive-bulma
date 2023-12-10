import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { ModalProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Modal: React.FC<ModalProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  children = null,
  onCloseClick = null
}) => {
  const modalContainerClasses = parseClasses([
    'modal',
    'is-active',
    containerCssClasses
  ])
  const modalContainerTestId =
    containerTestId ??
    parseTestId({ tag: 'modal', parsedClasses: modalContainerClasses })
  const modalClasses = parseClasses(['modal-content', cssClasses])
  const modalTestId =
    testId ?? parseTestId({ tag: 'modal-content', parsedClasses: modalClasses })

  const handleCloseClick = () => {
    if (onCloseClick) onCloseClick()
    children = null
  }

  return (
    children && (
      <section
        data-testid={modalContainerTestId}
        className={modalContainerClasses}
        style={containerStyle ?? undefined}
      >
        <section
          data-testid={'test-modal-background'}
          className='modal-background'
          aria-hidden='true'
          onClick={handleCloseClick}
        ></section>
        <section
          data-testid={modalTestId}
          className={modalClasses}
          style={style ?? undefined}
        >
          {children}
        </section>
        <button
          data-testid={'test-modal-close'}
          className='modal-close is-large'
          aria-label='close'
          onClick={handleCloseClick}
        ></button>
      </section>
    )
  )
}

export default Modal
