// src/components/RegisterModal.jsx
import React from "react";
import { Modal, TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createAgency } from "../services/api";

const RegisterModal = ({ opened, onClose }) => {
    const form = useForm({
        initialValues: {
            name: "",
            address: "",
            phone: "",
            email: "",
            manager: "",
            status: "ativo",
        },
    });

    const handleSubmit = async (values) => {
        try {
            await createAgency(values);
            form.reset();
            onClose();
        } catch (error) {
            console.log("Não foi possível cadastrar a agência.");
        }
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Cadastro de Nova Agência"
        >
            <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Nome da Agência"
                    placeholder="Digite o nome da agência"
                    required
                    {...form.getInputProps("name")}
                />
                <TextInput
                    label="Endereço"
                    placeholder="Digite o endereço"
                    required
                    {...form.getInputProps("address")}
                />
                <TextInput
                    label="Telefone"
                    placeholder="Digite o telefone"
                    required
                    {...form.getInputProps("phone")}
                />
                <TextInput
                    label="Email"
                    placeholder="Digite o email"
                    required
                    {...form.getInputProps("email")}
                />
                <TextInput
                    label="Gerente"
                    placeholder="Digite o nome do gerente"
                    required
                    {...form.getInputProps("manager")}
                />
                <Group position="right" mt="md">
                    <Button type="submit">Enviar</Button>
                </Group>
            </Box>
        </Modal>
    );
};

export default RegisterModal;
