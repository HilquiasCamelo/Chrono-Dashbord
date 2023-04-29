import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type Cargo = {
  id: number,
  descricao: string,
  sigla: string,
  ordem: number,
  ativo: boolean
}

type CargoListProps = {
  cargos: Cargo[],
  onDelete: (id: number) => void,
  onEdit: (id: number) => void,
  onView: (id: number) => void
}

export const CargoList = ({ cargos, onDelete, onEdit, onView }: CargoListProps) => {
  return (
    <>

      {cargos.map((cargo) => (
        <tr key={cargo.id}>
          <td>{cargo.id}</td>
          <td>{cargo.descricao}</td>
          <td>{cargo.sigla}</td>
          <td>{cargo.ordem}</td>
          <td>{cargo.ativo ? 'Ativo' : 'Inativo'}</td>
          <td>
            <Button className="btn btn-success view-button" onClick={() => onView(cargo.id)}>Visualizar</Button>{' '}
            <Button className="btn btn-attention" onClick={() => onEdit(cargo.id)}>Editar</Button>{' '}
            <Button className="btn btn-danger" onClick={() => onDelete(cargo.id)}>Deletar</Button>
          </td>
        </tr>
      ))}

    </>
  );
};
