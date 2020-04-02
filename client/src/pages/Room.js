import React, { Component } from "react";
import socketIOClient from 'socket.io-client'
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

class Room extends Component {
  state = {
    roomList: [],
    socket: ''
  }

  componentDidMount() {
    const socket = socketIOClient();
    socket.on("chat message", data => console.log('owerlo sdfasd ' + data));
    socket.on("apiCall", data => console.log('api Call ' + data));
    socket.emit('chat message', 'hello')
  }

  test = () => {
    this.state.socket.emit('chat message', 'hello')
    this.state.socket.on('chat message', function(msg) {
      console.log('owerlo sdfasd');
      
    });
  }

  pushTheButton = (id) => {

  }



  render() {
    return (
      <Container>
        <Row>
          <Col size="md-9">
            {console.log(this.props.match.params.id)}
            <button
              className="btn btn-primary"
            // onClick={this.addEmployee}
            >Push Me</button>
          </Col>
          <Col size="md-3">
            <p>Guest Scores</p>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Room;
