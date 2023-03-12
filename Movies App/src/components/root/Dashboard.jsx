import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import CategoryList from "../category/CategoryList";
import Movies from "../movies/Movies";
import SelectInput from "../toolBox/SelectInput";
import {AiOutlineSortDescending} from "react-icons/ai"

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs="9">
          <Card>
            <CardHeader>
              <div>
                <h5> Movie List </h5>
              </div>
              <div className="form">
                <h5>Showing 250 Titles</h5>
                <h5 className="form">
                  <h5 style={{marginTop:7, marginRight:6}}>Short by :</h5> <h5><SelectInput></SelectInput></h5><AiOutlineSortDescending style={{marginTop:9}}></AiOutlineSortDescending>
                </h5>
              </div>
            </CardHeader>
            <CardBody>
              <Movies></Movies>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card>
            <CardHeader>Dashboard</CardHeader>
            <CardBody>
              <CategoryList ></CategoryList>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
