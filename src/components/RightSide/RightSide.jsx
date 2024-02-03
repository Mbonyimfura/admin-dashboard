import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './RightSide.css'

export default function RightSide() {
  return (
   <div className="RightSide">
    <div>
        <h3>Updates</h3>
        <Updates/>
    </div>
    <div>
        <h3>Customer Review</h3>
        <CustomerReview/>
    </div>
   </div>
  )
}
