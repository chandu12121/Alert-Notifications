// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'

import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo />
      <div>
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )
  const renderWarningNotification = () => (
    <Notification>
      <MdWarning />
      <div>
        <h1>Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )
  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill />
      <div>
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  return (
    <div className="container">
      <div className="container1">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
