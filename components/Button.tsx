type ButtonProps= {
    type:"button"|"submit";
    title:string;
    icon?:string;
    variant:string;
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`}  type={type}>
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
