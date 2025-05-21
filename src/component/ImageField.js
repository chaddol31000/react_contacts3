import React from 'react'

function ImageField({photoUrl, alt, name, label, onChange}) {
  return (
    <div>
      {photoUrl && <img src={photoUrl} style={{height:'200px', objectFit:'cover'}} alt={alt}/>}
      <div className='mb-3 mt-3'>
        <label htmlFor={name} className='form-label'>{label}:</label>
        <input type='file' className='form-control' name='photo' onChange={onChange} />
      </div>
    </div>
  )
}

export default ImageField