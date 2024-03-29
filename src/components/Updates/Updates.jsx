import { UpdateData } from '../Data/data'
import  './Updates.css'

export default function Updates() {
  return (
  <div className="Updates">
   {UpdateData.map((update)=>{
    return(
      <div className="update">
        <img src={update.img} alt="" />
        <div className="noti">
          <div style={{marginBottom:'0.5rem'}}>
            <span>
              {update.name}
            </span>
            <span>{update.noti}</span>
          </div>
          <span> {update.time}</span>
        </div>
      </div>
    )
   })}
  </div>
  )
}
