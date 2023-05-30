import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from "react-bootstrap"; 
import "./styles.css";

export function MyTable({ items }) {
  return (
    <Table striped bordered hover> {/* Apply Bootstrap classes */}
      <thead>
        <tr>
          <th>Comune</th>
          <th>Provincia</th>
          <th>Sigla</th>
          <th>Dose 1</th>
          <th>Dose 2</th>
          <th>Booster</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.codice}>
            <td>{item.comune}</td>
            <td>{item.provincia}</td>
            <td>{item.sigla}</td>
            <td>{item.dose1}</td>
            <td>{item.dose2}</td>
            <td>{item.booster}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}