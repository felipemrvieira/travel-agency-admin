import React from "react";
import { Container, Title, Button, Text } from "@mantine/core";
import "./Home.css";
import homem from "../assets/homem.png";

const Home = () => {
    return (
        <>
            <div className="bg"></div>
            <Container pt={80} className="container">
                <div className="content text-content">
                    <Title
                        order={1}
                        style={{
                            fontSize: "3rem",
                            color: "#fff",
                            fontSize: "46px",
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
                    >
                        Filie-se Agora
                    </Button>
                </div>
                <div className="content image-content">
                    <img src={homem} alt="Example" />
                </div>
            </Container>
        </>
    );
};

export default Home;
