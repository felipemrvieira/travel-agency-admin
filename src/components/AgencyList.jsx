import React, { useEffect, useState } from "react";
import { getAgencies } from "../services/api";
import { Table, Container, LoadingOverlay, Alert, Text } from "@mantine/core";

const AgencyList = () => {
    const [agencies, setAgencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAgencies();
                setAgencies(data);
            } catch (error) {
                console.error("Error fetching agencies:", error);
                setError("Failed to load agencies");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingOverlay visible />;
    }

    if (error) {
        return (
            <Container>
                <Alert title="Error" color="red">
                    {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid>
            {agencies.length === 0 ? (
                <Alert title="Nenhuma agência encontrada" color="yellow">
                    Não há agências disponíveis no momento.
                </Alert>
            ) : (
                <Table highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Endereço</Table.Th>
                            <Table.Th>Telefone</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Gerente</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {agencies.map((agency) => (
                            <Table.Tr key={agency.id}>
                                <Table.Td>{agency.id}</Table.Td>
                                <Table.Td>{agency.name}</Table.Td>
                                <Table.Td>{agency.address}</Table.Td>
                                <Table.Td>{agency.phone}</Table.Td>
                                <Table.Td>{agency.email}</Table.Td>
                                <Table.Td>{agency.manager}</Table.Td>
                                <Table.Td>{agency.status}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            )}
        </Container>
    );
};

export default AgencyList;
