import Cardview from "../../components/Cardview";
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../stylesheets/Achievements.css'; 
import ten from '../../assets/209f7a19-7f48-4781-a05a-35d63c294b59.jpg';
import wsc from '../../assets/1631338978859.jpg';
import twel from '../../assets/cb2b98de-4a44-4cb9-8013-c4fad9ea90b2.jpg';


function Achievements() {
  return (
    <div className='cardsContainer'>
      <Container>
        <Row>
          <Col md="9" lg="6" xl="4">
            <Cardview
              title="10th Grade Achievements"
              subtitle="Scored above 90% in every subject"
              image={ten}
              cardText="Achieved above 90% in all subjects during 10th grade in 2021."
            />
          </Col>
          <Col md="9" lg="6" xl="4">
            <Cardview
              title="12th Grade Achievements"
              subtitle="Scored above 90% in every subject"
              image={twel}
              cardText="Achieved above 90% in all subjects during 12th grade in 2023."
            />
          </Col>
          <Col md="9" lg="6" xl="4">
            <Cardview
              title="World’s Scholar’s Cup"
              subtitle="Participated in the World’s Scholar’s Cup"
              image={wsc}
              cardText="Participated in the World’s Scholar’s Cup in 2019."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Achievements;



