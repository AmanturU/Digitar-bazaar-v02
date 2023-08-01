
import React, { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'


function DropzoneComponent(props) {
  const { padding, children, upload, multiple, ...restProps } = props
  const boxPadding = padding ? padding : '0'

  const baseStyle = {
    flexDirection: 'column',
    display: 'flex',
    padding: boxPadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    border: '2px dashed rgba(101, 103, 107, 0.50)',
    color: '#777E90',
    transition: 'border .3s ease-in-out',
    cursor: 'pointer',
  }

  const activeStyle = {
    borderColor: '#2196f3',
  }

  const acceptStyle = {
    borderColor: '#00e676',
  }

  const rejectStyle = {
    borderColor: '#ff1744',
  }

  const onDrop = useCallback(acceptedFiles => {
    // console.log(acceptedFiles)
    if (acceptedFiles.length > 0) {
      upload(acceptedFiles[0])
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: multiple ? multiple : false,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isDragActive,
    isDragReject,
    isDragAccept,
  ])

  return (
    <div {...getRootProps({ style })}>
      <input ref={props.inputRef} {...getInputProps()} />

      <>
        {children}
      </>
    </div>
  )
}

export default DropzoneComponent