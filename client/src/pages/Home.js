import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  state = {
    roomList: []
  };

  componentDidMount() {
    this.getRooms()
  }

  getRooms = () => {
    // Gets all active rooms in DB and adds to state
    API.getRooms()
      .then(res =>
        this.setState({
          roomList: res.data
        })
      )
      .catch(() =>
        this.setState({
          roomList: [],
          message: "No rooms found, better create one!"
        })
      );
  };

  addEmployee = () => {
    API.addRoom({})
      .then(res => {
        this.getRooms()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <Row>
                <Col size="md-9">
                  <h2>Rooms:</h2>
                </Col>
                <Col size="md-3">
                  <button
                    className="btn btn-primary"
                    onClick={this.addEmployee}
                  >New Room</button>
                </Col>
              </Row>
              <Row>
                {this.state.roomList.length > 0 && this.state.roomList.map(room => <Col size="md-4">
                  <Link to={`/room/${room._id}`}>
                    <Card title="Current Employees">
                      <p>{room._id}</p>
                    </Card>
                  </Link>
                </Col>)}
                {this.state.message && <p>{this.state.message}</p>}
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
