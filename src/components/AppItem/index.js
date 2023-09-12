const TabItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <li className="app-logo-container">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default TabItem
