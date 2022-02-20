import {Card, CardGroup, Col, Row} from "react-bootstrap";

export function CardDeck() {
    const links = [
        "https://drive.google.com/file/d/1MOXpy0pAwYItolHRPZNosxcD4wYV1YMG/preview",
        "https://drive.google.com/file/d/1UZ11rrD3kyOkLr3oTgszF9sdYLAmp53X/preview",
        "https://drive.google.com/file/d/1PY_Hb1sL4WusSZVVtvfVH1oCCixX7VJj/preview",
        "https://drive.google.com/file/d/1TPiZTaI7ljZV4g_F-B690T1c_bes1Fa-/preview",
        "https://drive.google.com/file/d/1a1JI3sFJxa8hra0heZKpG2KnJ8mj89Z4/preview",
        "https://drive.google.com/file/d/1W-eC9He6SPgvxzAMDjWqOk5j_bI06cU0/preview"
    ]
    return (
        // <Row xs={1} md={2} className="g-4">
        <CardGroup>
            {Array.from({ length: 4 }).map((_, idx) => (
                // <Col>
                    <Card>
                        {/*<Card.Img variant="top"*/}
                        {/*          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"*/}
                        {/*          alt="new"/>*/}
                        <iframe
                            src={links[idx]}
                            width="320" height="240" allow="autoplay"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                // </Col>
            ))}
        </CardGroup>
        // </Row>
    );
}