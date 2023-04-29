import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { DangerButton, SecondaryButton } from '../../styles/ModalStyle'
import { } from "../Cargo/";
import ProgressBar from '../../components/ProgressivBar';
import Progress_bar from '../../components/ProgressivBar';

interface Cargo {
    idCargo: number;
    descricao: string;
    sigla: string;
    ordem: number;
    ativo: boolean;
}

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    cargo: Cargo | null;
    onSave: (cargo: Cargo, idCargo: number) => void;
    onView: (idCargo: number) => void;
    title: string;
}

export const CargoModal: React.FC<Props> = ({ isOpen, onRequestClose, cargo, onSave, title }) => {
    const [descricao, setDescricao] = useState<string>('');
    const [sigla, setSigla] = useState<string>('');
    const [ordem, setOrdem] = useState<number>(0);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [ativo, setAtivo] = useState<boolean>(false);
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

    const handleClose = () => {
        if (saveSuccess) {
            onRequestClose();
        } else {
            setErrorMessage("");
            setSuccessMessage("");
        }
    };

    const showSuccessMessage = (message: string) => {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage("");
            setSaveSuccess(true);
        }, 5000); // a mensagem desaparecerá após 5 segundos
    };

    const showErrorMessage = (message: string) => {
        setErrorMessage(message);
        setSaveSuccess(false);
    };

    useEffect(() => {
        if (cargo) {
            setDescricao(cargo.descricao);
            setSigla(cargo.sigla);
            setOrdem(cargo.ordem);
            setAtivo(cargo.ativo);
        }
    }, [cargo]);

    const handleDescricaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(event.target.value);
    };

    const handleSiglaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSigla(event.target.value);
    };

    const handleOrdemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrdem(parseInt(event.target.value, 10));
    };

    const handleAtivoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAtivo(event.target.checked);
    };

    const handleSave = (event: React
        .FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCargo: Cargo = {
            descricao,
            sigla,
            ordem,
            ativo,
            idCargo: cargo?.idCargo ?? 0,
        };
        onSave(newCargo, cargo?.idCargo ?? 0);
        showSuccessMessage("Cargo salvo com sucesso!");
        setTimeout(() => {
            setSaveSuccess(true);
        }, 5000); // fechar a mensagem de sucesso após 5 segundos
    };


    return (

        <Modal show={isOpen} onHide={handleClose} centered>
            <ModalHeader closeButton>
                <ModalTitle>{title.toUpperCase()}</ModalTitle>
            </ModalHeader>
            <Form onSubmit={handleSave}>
                <ModalBody>
                    <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control type="text" value={descricao} onChange={handleDescricaoChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sigla:</Form.Label>
                        <Form.Control type="text" value={sigla} onChange={handleSiglaChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ordem:</Form.Label>
                        <Form.Control type="number" value={ordem} onChange={handleOrdemChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ativo:</Form.Label>
                        <Form.Check type="checkbox" checked={ativo} onChange={handleAtivoChange} />
                    </Form.Group>
                </ModalBody>
                <ModalFooter>
                    <SecondaryButton variant="secondary" onClick={handleClose}>
                        Cancelar
                    </SecondaryButton>
                    <DangerButton variant="danger" type="submit" >
                        Salvar
                    </DangerButton>
                </ModalFooter>
            </Form>

            <div style={{ color: successMessage ? 'green' : errorMessage ? 'red' : '', marginTop: '10px' }}>
                {successMessage || errorMessage}
                {successMessage && <Progress_bar now={50} label="Loading" height={20} duration={10}/>}
            </div>

        </Modal>
    );
};


