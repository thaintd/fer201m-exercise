import React from 'react'
import style from './Button.module.scss';

export default function Button({value = "Button Component"}) {
  return (
    <button className={style['button-demo']}>
      {value}
    </button>
  )
}
