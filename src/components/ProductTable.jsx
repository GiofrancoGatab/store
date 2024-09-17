import React from "react";
import Table from "/.Table";
import SearchBar from "./SearchBar";

const ProductTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>
      </Table.TableContainer>

      <Table.TBody>
        <Table.Row>
          <Table.Column>Football</Table.Column>
          <Table.Column>$49.99</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column>Baseball</Table.Column>
          <Table.Column>$49.99</Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Column>Basketball</Table.Column>
          <Table.Column>$49.99</Table.Column>
        </Table.Row>
      </Table.TBody>
    </div>
  );
};
