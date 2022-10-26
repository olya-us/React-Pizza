
const Button = ({onClick, className, children}) => {
    return (
        <button className={className}>{children}</button>
    )
}

export default Button;