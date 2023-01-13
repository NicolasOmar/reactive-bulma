import React from "react"

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text = '' }) => <button className="button">{text}</button>

export default Button