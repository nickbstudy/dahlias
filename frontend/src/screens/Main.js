import './Main.css'
import Planter from '../components/Planter'
import Dahlias from '../components/Dahlias'


const Main = () => {
  return (
    <div className="page">
      <div style={{gridArea: "choices", color: '#fff'}}>
      <Dahlias />
      </div>
      <div style={{gridArea: "planter", color: '#fff', height: '500px'}}>
      <Planter />
      </div>
      

    </div>
  )
}

export default Main