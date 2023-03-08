import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const emergencyContacts = [
  { name: 'Police', number: '911' },
  { name: 'Fire Department', number: '911' },
  { name: 'Ambulance', number: '911' },
  { name: 'Poison Control', number: '1-800-222-1222' },
  { name: 'National Suicide Prevention Lifeline', number: '1-800-273-8255' },
  { name: 'FEMA Disaster Assistance', number: '1-800-621-3362' },
  { name: 'American Red Cross', number: '1-800-733-2767' },
  { name: 'National Weather Service', number: '1-301-713-9142' },
  { name: 'Animal Poison Control Center', number: '1-888-426-4435' },
  { name: 'FEMA (Federal Emergency Management Agency)', number: '1-800-621-3362' },
  { name: 'Red Cross', number: '1-800-733-2767' },
  { name: 'National Weather Service', number: '1-888-976-7468' },
  { name: 'National Hurricane Center', number: '1-305-229-4470' },
  { name: 'USGS (U.S. Geological Survey) Earthquake Hazards Program', number: '1-888-275-8747' },
  { name: 'National Tsunami Warning Center', number: '1-888-851-9350' }
];

const EmergencyContacts = () => {
  return (
    <Container fluid className="emergency-contacts-container py-5">
      <h2 className="text-center mb-5">Emergency Contacts</h2>
      <Row className="justify-content-center">
        {emergencyContacts.map(contact => (
          <Col xs={12} sm={6} md={4} key={contact.name} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.number}</p>
                <a href={`tel:${contact.number}`} className="btn btn-primary">Call</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmergencyContacts;
