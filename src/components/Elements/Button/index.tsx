
const Button = ({ w, h, text, style, click, icon }: ButtonType) => {
    return (
        <button
            onClick={click}
            className="text-sm fonst-base p-2 rounded-md"
        >{text}</button>
    )
}
export default Button

type ButtonType = {
    text?: string,
    w?: string,
    h?: string,
    style?: string,
    icon?: React.ReactNode
    click?: () => void,
}