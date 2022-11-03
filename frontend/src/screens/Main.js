// import './Main.css'
import Planter from '../components/Planter'
import Dahlias from '../components/Dahlias'


const Main = () => {
  return (
    <div className="page" style={{overflow: 'hidden'}}>
      <Dahlias />
      <Planter />
    </div>
  )
}

export default Main