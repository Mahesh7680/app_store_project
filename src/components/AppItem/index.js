import './index.css'

const TabItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <li className="app-logo-container">
      <img src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default TabItem
