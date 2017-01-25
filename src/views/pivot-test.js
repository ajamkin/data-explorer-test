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

    this._renderBodyCell = this._renderBodyCell.bind(this);
    this._renderTopHeaderCell = this._renderTopHeaderCell.bind(this);
    this._renderLeftHeaderCell = this._renderLeftHeaderCell.bind(this);
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
    } = this.state;

    return (
      <div className="ddp-root">
        <main role="main">
          <div className="container">
            <div className="alert alert-warning" role="alert">
              <strong>Total items:</strong>
              &nbsp;{this.state.rowCount}

              <strong style={{ marginLeft: '20px' }}>Items in state:</strong>
              &nbsp;{this.state.data.length}

              <strong style={{ marginLeft: '20px' }}>Last loaded range:</strong>
              &nbsp;{JSON.stringify(this.state.lastLoadedRange)}
            </div>
            <ScrollSync>
              {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
                return (
                  <div className='GridRow'>
                    <div className="GridColumn" style={{ flex: '0 0 150px' }}>
                      <div className='LeftSideGridContainer'
                           style={{
                             position: 'absolute',
                             left: 0,
                             top: rowHeight * 2,
                             color: '#000',
                             borderRight: '1px solid #aaa',
                             backgroundColor: `#fff`
                           }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '150px', overflowX: 'scroll' }}>
                          <div>
                            <Grid
                              overscanColumnCount={overscanColumnCount}
                              overscanRowCount={overscanRowCount}
                              cellRenderer={this._renderLeftHeaderCell}
                              columnWidth={columnWidth}
                              columnCount={1}
                              className='LeftSideGrid'
                              height={height - scrollbarSize()}
                              rowHeight={rowHeight * 2}
                              rowCount={500}
                              scrollTop={scrollTop}
                              width={columnWidth}
                            />
                          </div>
                          <div>
                            <Grid
                              overscanColumnCount={overscanColumnCount}
                              overscanRowCount={overscanRowCount}
                              cellRenderer={this._renderLeftHeaderCell}
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
                          <div>
                            <Grid
                              overscanColumnCount={overscanColumnCount}
                              overscanRowCount={overscanRowCount}
                              cellRenderer={this._renderLeftHeaderCell}
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
                        </div>
                      </div>
                    </div>
                    <div className='GridColumn'>
                      <AutoSizer disableHeight>
                        {({ width }) => (
                          <div>
                            <div style={{
                              backgroundColor: `#fff`,
                              color: '#000',
                              borderBottom: '2px solid #aaa',
                              height: rowHeight * 2,
                              width: width - scrollbarSize(),
                            }}>
                              <Grid
                                className='HeaderGrid'
                                columnWidth={columnWidth * 2}
                                columnCount={columnCount / 2}
                                height={rowHeight}
                                overscanColumnCount={overscanColumnCount}
                                cellRenderer={this._renderTopHeaderCell}
                                rowHeight={rowHeight}
                                rowCount={1}
                                scrollLeft={scrollLeft}
                                width={width - scrollbarSize()}
                              />
                              <Grid
                                className='HeaderGrid'
                                columnWidth={columnWidth}
                                columnCount={columnCount}
                                height={rowHeight}
                                overscanColumnCount={overscanColumnCount}
                                cellRenderer={this._renderTopHeaderCell}
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

  _renderTopHeaderCell({ columnIndex, key, rowIndex, style }) {
    style.border = '1px solid #eee';
    return (
      <div
        className='cell'
        key={key}
        style={style}
      >
        <strong>{`COL_${columnIndex}`}</strong>
      </div>
    );
  }

  _renderLeftHeaderCell({ columnIndex, key, rowIndex, style }) {
    style.border = '1px solid #eee';
    return (
      <div
        className='cell'
        key={key}
        style={style}
      >
        <strong>{`ROW_${rowIndex}`}</strong>
      </div>
    )
  }
}
