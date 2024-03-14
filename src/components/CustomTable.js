import { useColorModeValue } from "@chakra-ui/react";
import DataTable, { createTheme } from "react-data-table-component";
import Filter from "./Filter";
import React from "react";

export default function CustomTable({ columns, data }) {
  const theme = useColorModeValue("", "");

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data?.filter(
    (item) =>
      item.name.common &&
      item.name.common.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <Filter
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  createTheme(
    "solarized",
    {
      background: {
        default: "transparent",
      },
      context: {
        background: "transparent",
      },
      divider: {
        default: "#3e3f40",
      },
      sortFocus: {
        default: "#2aa198",
      },
    },
    "dark"
  );

  const customStyles = {
    rows: {
      style: {
        fontSize: "14px",
      },
    },
    headCells: {
      style: {
        minHeight: "72px",
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      fixedHeader={true}
      theme={theme}
      customStyles={customStyles}
      noHeader={true}
      paginationResetDefaultPage={resetPaginationToggle}
      // subHeader
      // subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  );
}
