import './index.css'

const TabItem = props => {
  const {eachTabDetails, selectedTabId, onChangeTab} = props
  const selectedClassname =
    eachTabDetails.tabId === selectedTabId ? 'selected-tab' : ''

  const onTabClick = () => {
    onChangeTab(eachTabDetails.tabId)
  }

  return (
    <li>
      <button
        className={`tab-item ${selectedClassname}`}
        type="button"
        onClick={onTabClick}
      >
        {eachTabDetails.displayText}
      </button>
    </li>
  )
}

export default TabItem
