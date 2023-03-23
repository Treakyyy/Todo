import styles from './Button.modules.css'

function Button(props) {
    const { onClick, children, title, disabled = false } = props
    return <button {...props} className = "button" onClick={onClick} title ={title} disabled = {disabled}>{children}</button>
}

export default Button