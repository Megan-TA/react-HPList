import * as React from 'react'
import * as ReactDom from 'react-dom'
import ReactHPList from './lib/react-HPList'
import './lib/list.styl'

const data = []

for (let i = 0; i < 2000; i++) {
    data.push({
        data: i,
        name: i > 10 ? '李四' : '张三'
    })
}

function ListItem (lists) {
    return (
        <React.Fragment>
            {
                lists.map((list, index) => {
                    return (
                        <div
                            key = {index}
                            className = 'list-item'
                        >
                            <div className = 'list-item-left'>
                                我是左边 {list.data}
                            </div>
                            <div className = 'list-item-right'>
                                我是右边 {list.name}
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

function render () {
    ReactDom.render(
        <div>
            <ReactHPList
                data = {data}
                renderItem = {ListItem}
                itemHeight = {41}
            />
        </div>,
        document.getElementById('root')
    )
}

setTimeout(() => {
    render()
}, 0)
