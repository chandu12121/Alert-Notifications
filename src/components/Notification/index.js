// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div>
      <div>{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
