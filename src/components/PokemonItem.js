import React from "react";
import { Card, CardImg, Col, Row } from "reactstrap";
import "./PokemonItem.css";

class PokemonItem extends React.Component {

  toUppercase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    //console.log("Poke", this.props);
    return (
      <div className="pokemon">
        <Card>
          <Row>
            <Col md="6">
              <CardImg top width="50%" src={this.props.img} />
            </Col>
            <Col md="6">
              Name: {this.toUppercase(this.props.name)} <br />
              Weight: {this.props.weight}
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default PokemonItem;
