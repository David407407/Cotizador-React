import '../styles/Spinner.css'
type Props = {}

function Spinner({}: Props) {
  return (
    <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </div>
  )
}

export default Spinner