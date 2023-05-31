import React from "react";
import "./styles.css";

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

export function MyTable({ items }) {
  const columnDefs = [
    { headerName: 'Comune', field: 'comune' },
    { headerName: 'Provincia', field: 'provincia' },
    { headerName: 'Sigla', field: 'sigla' },
    { headerName: 'Dose 1', field: 'dose1' },
    { headerName: 'Dose 2', field: 'dose2' },
    { headerName: 'Booster', field: 'booster' },
  ];


  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <AgGridReact
        rowData={items}
        columnDefs={columnDefs}
      />
    </div>
  );
}
