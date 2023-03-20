import styles from './Button.module.scss';

const Button = ({ children, className, color, ...rest }) => {
  let buttonClassName = styles.button;
  console.log('hi',buttonClassName); // Button_button__PjVhE 

  if ( className ) {
    buttonClassName = `${buttonClassName} ${className}`
 
  }
  console.log('by',className);       // snipcart-add-item in INDEX.JS

  return (
    <button className={buttonClassName}  {...rest}>
      { children }
    </button>
  )
}

export default Button;