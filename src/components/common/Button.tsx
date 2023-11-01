interface ButtonProps {
  type?: "button" | "submit" | "reset"; 
  className?: string;
  onClick?: () => void;
  children: string,
  disabled?: true | false
}
export function Button(props: ButtonProps) {
  return (
    <button
      type={props.type || "button"} // Use a default value if 'type' is not provided
      className={props.className}
      onClick={props?.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
