import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

export function InProgress() {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h2 style={{paddingBottom: 20, color: 'white'}}>
                        <Typewriter
                            options={{
                                strings: [
                                    "Něco se chystá",
                                    "Jsi ready?",
                                    "Za chvíli to spustíme",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}
