# react-HPList

处理大量数据情况下的长列表组件

```
    import ReactHPList from './lib/react-HPList'
```

* 接受三个参数（必填）
  
1. data 数据源；
2. renderItem 自定义的渲染list的布局函数；
3. itemHeight 单个列表项的高度；

```
    const data = [1, 2, 3, 4, 5, 6]

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
```

* 最终组件如下

```
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
```
