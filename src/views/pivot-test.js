import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { MultiGrid, AutoSizer, InfiniteLoader, Grid, Table, Column, ScrollSync } from 'react-virtualized';
import 'react-virtualized/styles.css';


const list = [];
const remoteRowCount = 1000;
const columns = _.range(15).map(idx => ({
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
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              rowCount={remoteRowCount}
            >
              {({ onRowsRendered, registerChild }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <Table
                      ref={registerChild}
                      onRowsRendered={onRowsRendered}
                      rowHeight={23}
                      height={250}
                      rowCount={remoteRowCount}
                      rowGetter={rowGetter}
                      width={width}
                    >
                      {columns.map(col => (
                        <Column
                          key={col.dataKey}
                          width={200}
                          {...col}
                        />
                      ))}
                    </Table>
                  )}
                </AutoSizer>
              )
              }
            </InfiniteLoader>
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
