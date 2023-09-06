import "./button.css"

const button = (props) => {
  return <button onClick={props.click} className="btn">{props.children}</button>
}

export default button