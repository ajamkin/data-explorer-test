import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { MultiGrid, AutoSizer, InfiniteLoader, Grid, Table, Column, ScrollSync } from 'react-virtualized';
import 'react-virtualized/styles.css';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

const list = [];

const remoteRowCount = 1000;
const columnWidth = 200;
const rowHeight = 40;

const columns = _.range(5).map(idx => ({
  label: `col_${idx}`,
  dataKey: `dk_col_${idx}`
}));

function isRowLoaded({ index }) {
  //console.log('isRowLoaded', index);
  return !!list[index];
}

function loadMoreRows({ startIndex, stopIndex }) {
  console.log('loadMoreRows', startIndex, stopIndex);
  return new Promise(res => {
    for (let i = startIndex; i < stopIndex; i++) {
      const rowData = {};

      for (let j = 0; j < columns.length; j++) {
        rowData[columns[j].dataKey] = `r${i}_c${j}`;
      }

      list[i] = rowData;
    }
    res(true);
  });
}

function rowGetter({ index }) {
  //console.log('rowGetter', index);
  return _.get(list, index, {});
}


console.log(columns);

class PivotTest extends React.Component {
  constructor(props) {
    super(props);

    this._renderHeaderCell = this._renderHeaderCell.bind(this);
    this._renderLeftHeaderCell = this._renderLeftHeaderCell.bind(this);
  }

  _renderHeaderCell(opts) {
    console.log('_renderHeaderCell', opts);
    const { columnIndex, key, rowIndex, style } = opts;
    if (columnIndex < 1) {
      return
    }
    return this._renderLeftHeaderCell({ columnIndex, key, rowIndex, style })
  }

  _renderLeftHeaderCell({ columnIndex, key, rowIndex, style }) {
    return (
      <div key={key} className="" style={style}>
        {`COLM${columnIndex}`}
      </div>
    )
  }

  render() {
    return (
      <div className="ddp-root">
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-warning" role="alert">
                  <strong>List length: {list.length}</strong>
                </div>
              </div>
            </div>
            <ScrollSync>
              {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => (
                <div className="GridColumn">
                  <AutoSizer disableHeight>
                    {({ width }) => (
                      <div>
                        <div style={{
                          backgroundColor: '#f9f9f9',
                          height: rowHeight,
                          width: width - scrollbarSize()
                        }}>
                          <Grid
                            className='HeaderGrid'
                            columnWidth={columnWidth}
                            columnCount={_.size(columns)}
                            height={rowHeight}
                            cellRenderer={this._renderHeaderCell}
                            rowHeight={rowHeight}
                            rowCount={1}
                            scrollLeft={scrollLeft}
                            width={width - scrollbarSize()}
                          />
                        </div>
                        <InfiniteLoader
                          isRowLoaded={isRowLoaded}
                          loadMoreRows={loadMoreRows}
                          rowCount={remoteRowCount}
                        >
                          {({ onRowsRendered, registerChild }) => (
                            <Table
                              ref={registerChild}
                              onRowsRendered={onRowsRendered}
                              rowHeight={rowHeight}
                              height={250}
                              onScroll={onScroll}
                              rowCount={remoteRowCount}
                              rowGetter={rowGetter}
                              width={width}
                            >
                              {columns.map(col => (
                                <Column
                                  key={col.dataKey}
                                  width={columnWidth}
                                  {...col}
                                />
                              ))}
                            </Table>
                          )}
                        </InfiniteLoader>
                      </div>
                    )}
                  </AutoSizer>
                </div>
              )}
            </ScrollSync>
            <br/>
            <br/>
          </div>
        </main>
      </div>
    )
  }
}

export default connect(state => ({
  comments: state.comments
}), actions)(PivotTest);
