import './index.css'

const TabItem = props => {
  const {eachTabItem, onClickTabItem} = props
  const {displayText, tabId} = eachTabItem

  const onClickedTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <button onClick={onClickedTab} type="button">
      {displayText}
    </button>
  )
}

export default TabItem
