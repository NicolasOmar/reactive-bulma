import React from 'react'
// TYPES & INTERFACES
import { FileProps } from '../../../interfaces/atomProps'
// PARSERS

const File: React.FC<FileProps> = () => (
  <section className='file'>
    <label className='file-label'>
      <input
        className='file-input'
        type='file'
        name='resume'
      />
      <span className='file-cta'>
        <span className='file-icon'>
          <i className='fas fa-upload'></i>
        </span>
        <span className='file-label'>Choose a file…</span>
      </span>
    </label>
  </section>
)

export default File
