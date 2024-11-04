import { Col, Row } from "antd";

import { CompanyContactsTable } from "./contacts-table";
import { CompanyForm } from "./form";

export const CompanyEditPage = () => {
    return (
        <div className="page-container">
            <Row>
                <Col xs={24} xl={12}>
                    <CompanyForm />
                </Col>
                
                <Col xs={24} xl={12}>
                    <CompanyContactsTable />
                </Col>
            </Row>
        </div>
    )
}
