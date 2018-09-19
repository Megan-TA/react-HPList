import * as React from 'react'
import './react-HPList.styl'

interface IpropsType {
    data: any[],
    renderItem: (any),
    itemHeight: number
}

class ReactHPList extends React.Component<IpropsType, any> {
    constructor (props, context) {
        super(props)
        this.state = {
            maxVisibleListNum: 1,
            visibleList: []
        }
        this.scrollContainer = this.scrollContainer.bind(this)
    }

    public componentDidMount () {
        const { itemHeight, data } = this.props
        const containerRef = this.refs.container as any
        // 计算一屏能显示最多的list个数
        const maxVisibleListNum = Math.ceil(containerRef.offsetHeight / itemHeight)
        this.firstPlaceholderHeight()
        this.setState({
            maxVisibleListNum
        })
        this.renderVisibleList(0, maxVisibleListNum)
    }

    public firstPlaceholderHeight () {
        const { data, itemHeight } = this.props
        const placeholder = this.refs['list-placeholder'] as any
        placeholder.style.height = `${data.length * itemHeight}px`
    }

    public renderVisibleList (from: number = 0, to: number = 10) {
        const { renderItem, data } = this.props
        const visibleData = data.slice(from, to)
        this.setState({
            visibleList: renderItem(visibleData)
        })
    }

    public scrollContainer (e) {
        e.preventDefault()
        const { itemHeight } = this.props
        const { maxVisibleListNum } = this.state
        const distance = e.target.scrollTop
        const listRef = this.refs.list as any
        const fromIndex = Math.floor(distance / itemHeight)
        this.renderVisibleList(fromIndex, fromIndex + maxVisibleListNum)
        listRef.style.webkitTransform = `translateY(${distance}px)`
    }

    public render () {
        const { visibleList } = this.state
        return (
            <div
                id='container'
                onScroll = {this.scrollContainer}
                ref = 'container'
            >
                <div id = 'list' ref = 'list'>
                    {visibleList}
                </div>
                <div ref = 'list-placeholder'></div>
            </div>
        )
    }
}

export default ReactHPList
