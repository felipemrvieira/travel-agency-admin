import React from "react";
import AgencyList from "../components/AgencyList";
import { Container, Title } from "@mantine/core";
// import "./Agency.css";

const Agency = () => {
    return (
        <Container fluid h={50}>
            <Title order={2} my="lg">
                Agências
            </Title>
            <AgencyList />
        </Container>
    );
};

export default Agency;
