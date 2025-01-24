import { Spin } from '../Spin';
import './styles.css';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}
export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}