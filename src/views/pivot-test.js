import React, { Component } from 'react'
import { Grid, AutoSizer, ScrollSync, InfiniteLoader }  from 'react-virtualized'
import shallowCompare from 'react-addons-shallow-compare'
import cn from 'classnames'
import scrollbarSize from 'dom-helpers/util/scrollbarSize'

export default class GridExample extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      columnWidth: 75,
      columnCount: 50,
      height: 300,
      overscanColumnCount: 0,
      overscanRowCount: 5,
      rowHeight: 40,
      rowCount: 1000,
      data: [],
      lastLoadedRange: {}
    };

    this._renderBodyCell = this._renderBodyCell.bind(this)
    this._renderHeaderCell = this._renderHeaderCell.bind(this)
    this._renderLeftSideCell = this._renderLeftSideCell.bind(this)
    this._onSectionRendered = this._onSectionRendered.bind(this);
    this._isRowLoaded = this._isRowLoaded.bind(this);
    this._loadMoreRows = this._loadMoreRows.bind(this);
  }

  render() {
    const {
      columnCount,
      columnWidth,
      height,
      overscanColumnCount,
      overscanRowCount,
      rowHeight,
      rowCount
    } = this.state

    return (
      <div className="ddp-root">
        <main role="main">
          <div className="container">
            <div className="alert alert-warning" role="alert">
              <strong>Total length:</strong>
              &nbsp;{this.state.rowCount}

              <strong style={{marginLeft:'20px'}}>Length in state:</strong>
              &nbsp;{this.state.data.length}

              <strong style={{marginLeft:'20px'}}>Last loaded range:</strong>
              &nbsp;{JSON.stringify(this.state.lastLoadedRange)}
            </div>
            <ScrollSync>
              {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
                return (
                  <div className='GridRow'>
                    <div
                      className='LeftSideGridContainer'
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        color: '#000',
                        backgroundColor: `#aaa`
                      }}
                    >
                      <Grid
                        cellRenderer={this._renderLeftHeaderCell}
                        className='HeaderGrid'
                        width={columnWidth}
                        height={rowHeight}
                        rowHeight={rowHeight}
                        columnWidth={columnWidth}
                        rowCount={1}
                        columnCount={1}
                      />
                    </div>
                    <div
                      className='LeftSideGridContainer'
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: rowHeight,
                        color: '#000',
                        borderRight: '1px solid #000',
                        backgroundColor: `#fff`
                      }}
                    >
                      <Grid
                        overscanColumnCount={overscanColumnCount}
                        overscanRowCount={overscanRowCount}
                        cellRenderer={this._renderLeftSideCell}
                        columnWidth={columnWidth}
                        columnCount={1}
                        className='LeftSideGrid'
                        height={height - scrollbarSize()}
                        rowHeight={rowHeight}
                        rowCount={rowCount}
                        scrollTop={scrollTop}
                        width={columnWidth}
                      />
                    </div>
                    <div className='GridColumn'>
                      <AutoSizer disableHeight>
                        {({ width }) => (
                          <div>
                            <div style={{
                              backgroundColor: `#fff`,
                              color: '#000',
                              borderBottom: '1px solid #000',
                              height: rowHeight,
                              width: width - scrollbarSize()
                            }}>
                              <Grid
                                className='HeaderGrid'
                                columnWidth={columnWidth}
                                columnCount={columnCount}
                                height={rowHeight}
                                overscanColumnCount={overscanColumnCount}
                                cellRenderer={this._renderHeaderCell}
                                rowHeight={rowHeight}
                                rowCount={1}
                                scrollLeft={scrollLeft}
                                width={width - scrollbarSize()}
                              />
                            </div>
                            <div
                              style={{
                                backgroundColor: `#fff`,
                                color: '#000',
                                height,
                                width
                              }}
                            >
                              <InfiniteLoader
                                isRowLoaded={this._isRowLoaded}
                                loadMoreRows={this._loadMoreRows}
                                rowCount={this.state.rowCount}
                              >
                                {({ onRowsRendered, registerChild }) => {
                                  this._onRowRendered = onRowsRendered;
                                  return (
                                    <Grid
                                      ref={registerChild}
                                      onSectionRendered={this._onSectionRendered}
                                      className='BodyGrid'
                                      columnWidth={columnWidth}
                                      columnCount={columnCount}
                                      height={height}
                                      onScroll={onScroll}
                                      cellRenderer={this._renderBodyCell}
                                      rowHeight={rowHeight}
                                      rowCount={rowCount}
                                      width={width}
                                    />
                                  )
                                }}
                              </InfiniteLoader>
                            </div>
                          </div>
                        )}
                      </AutoSizer>
                    </div>
                  </div>
                )
              }}
            </ScrollSync>
          </div>
        </main>
        <br/>
        <br/>
      </div>
    )
  }

  _isRowLoaded({ index }) {
    return !!this.state.data[index];
  }

  _loadMoreRows({ startIndex, stopIndex }) {
    console.log('_loadMoreRows', startIndex, stopIndex);
    const { columnCount, data } = this.state;
    return new Promise(res => {
      const newData = [...data];
      for (let i = startIndex; i < stopIndex; i++) {
        const rowData = {};
        for (let j = 0; j < columnCount; j++) {
          rowData[`R${i}_C${j}`] = `R${i}_C${j}`;
        }
        newData[i] = rowData;
      }
      this.setState({
        data: newData,
        lastLoadedRange: { startIndex, stopIndex }
      });
      res(true);
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  _onSectionRendered({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }) {
    this._onRowRendered({
      startIndex: rowStartIndex,
      stopIndex: rowStopIndex,
    });
  }

  _renderBodyCell({ columnIndex, key, rowIndex, style }) {
    if (columnIndex < 1) {
      return
    }

    const rowClass = rowIndex % 2 === 0 ? 'evenRow' : 'oddRow';
    const classNames = cn(rowClass, 'cell');

    let cellData = this.state.data[rowIndex];

    if (!cellData) {
      cellData = '...'
    } else {
      cellData = cellData[`R${rowIndex}_C${columnIndex}`];
    }

    return (
      <div style={style} key={key} className={classNames}>
        {cellData}
      </div>
    );
  }

  _renderHeaderCell({ columnIndex, key, rowIndex, style }) {
    if (columnIndex < 1) {
      return
    }

    return this._renderLeftHeaderCell({ columnIndex, key, rowIndex, style })
  }

  _renderLeftHeaderCell({ columnIndex, key, rowIndex, style }) {
    return (
      <div
        className='headerCell'
        key={key}
        style={style}
      >
        {`COL_${columnIndex}`}
      </div>
    )
  }

  _renderLeftSideCell({ columnIndex, key, rowIndex, style }) {
    const rowClass = rowIndex % 2 === 0
      ? columnIndex % 2 === 0 ? 'evenRow' : 'oddRow'
      : columnIndex % 2 !== 0 ? 'evenRow' : 'oddRow'
    const classNames = cn(rowClass, 'cell')

    return (
      <div
        className={classNames}
        key={key}
        style={style}
      >
        {`R${rowIndex}, C${columnIndex}`}
      </div>
    )
  }
}
