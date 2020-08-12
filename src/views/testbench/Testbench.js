import React, { useState } from "react";
import {
  CDataTable,
  CBadge,
  CRow,
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import ModalWnd from "../../components/modalWnd/ModalWnd";

/** Update table data */
import testBenchesData from "../../assets/myMockups/TestbenchesData";

/** Define table fields */
const fields = ["id", "name", "description", "location", "status"];

const Testbench = () => {
  const [visible, setVisible] = React.useState(10);
  const [modal, setModal] = useState(false);
  const [testbench_data, setTestbenchData] = useState({
    id: "",
    name: "",
    description: "",
    location: "",
    status: "",
  });
  const [testbench_color, setTestbenchColor] = useState();
  const [modalMode, setModalMode] = useState("add");

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  function handleOnClick_AddTestBench(e) {
    e.preventDefault();
    console.log("ADD", e);
    setTestbenchData({
      id: 100,
      name: "",
      description: "",
      location: "",
      status: "",
    });
    setModalMode("add");
    setModal(true);
  }
  const handle_onRowClick = (e) => {
    console.log(e);
    setTestbenchData(e);
    setTestbenchColor(getBadge(e.status));
    setModalMode("edit")
    setModal(true);
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="tb-list-table-header">
              <h1 size="sm">List of Test Benches</h1>
              <CButton
                className="float-right tb-add-button"
                color="success"
                onClick={handleOnClick_AddTestBench}
              >
                + Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={testBenchesData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                clickableRows={true}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
                onRowClick={handle_onRowClick}
              />

              {modal === true ? (
                <ModalWnd
                  onClose={setModal}
                  data={testbench_data}
                  color={testbench_color}
                  mode={modalMode}
                />
              ) : (
                ""
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Testbench;
