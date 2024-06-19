import React, { useState } from "react";
import { Container, Title, Button, Text } from "@mantine/core";
import "./Home.css";
import homem from "../assets/homem.png";
import RegisterModal from "../components/RegisterModal";

const Home = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div className="bg"></div>
            <Container pt={80} className="container">
                <div className="content text-content">
                    <Title
                        order={1}
                        style={{
                            fontSize: "2.8rem",
                            color: "#fff",
                        }}
                        className="title"
                    >
                        Bem-vindo ao
                        <div className="destaque">Clube de Vantagens</div>{" "}
                        Cativa!
                    </Title>
                    <Text
                        size="lg"
                        style={{
                            color: "#fff",
                            marginTop: "20px",
                        }}
                    >
                        Filie sua agência e aproveite uma variedade de
                        benefícios exclusivos. Junte-se a nós e potencialize seu
                        negócio!
                    </Text>
                    <Button
                        variant="light"
                        color="blue"
                        size="lg"
                        style={{ marginTop: "30px", borderRadius: "155px" }}
                        onClick={() => setModalOpened(true)}
                    >
                        Filie-se Agora
                    </Button>
                </div>
                <div className="content image-content">
                    <img src={homem} alt="Example" />
                </div>
                <RegisterModal
                    opened={modalOpened}
                    onClose={() => setModalOpened(false)}
                />
            </Container>
        </>
    );
};

export default Home;
