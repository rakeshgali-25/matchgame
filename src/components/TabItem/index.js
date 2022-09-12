import './index.css'

const TabItem = props => {
  const {each, onClickCategory} = props
  const {tabId, displayText} = each

  const onClickPress = () => {
    onClickCategory(tabId)
  }

  return (
    <li onClick={onClickPress}>
      <button type="button" className="tab-item">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
