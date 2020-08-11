import React, { useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput
} from "@coreui/react";

const ModalWnd = (props) => {
  console.log("HOLA", props);
  console.log("DATA", props.data, typeof props.data);
  return (
    <CModal show={props.show} onClose={props.onClose}>
      <CModalHeader closeButton>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {props.data.id}
        {props.data.name}
        {props.data.role}

        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Company
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Company</CLabel>
                <CInput id="company" placeholder="Enter your company name" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">VAT</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{" "}
        <CButton color="secondary" onClick={() => props.onClose(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalWnd;
