import { CircularProgress, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

export default function CustomTable({ columns, data }) {
  const theme = useColorModeValue("", "solarized");

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

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
      data={data}
      pagination
      theme={theme}
      customStyles={customStyles}
      progressPending={pending}
      progressComponent={<CircularProgress isIndeterminate={true} color="purple.300" />}
    />
  );
}
