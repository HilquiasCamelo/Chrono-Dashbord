import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CargoListStyle, VoltarStyle } from './style';
import { PaginationContainer } from '../../components/Pagination/PaginationStyle';
import Pagination from '../../components/Pagination/Pagination';
import { CargoList } from '../../components/Table';
import ConfirmationModal from '../../components/Modal/ModalConfirmacao';
import {CargoModal} from '../Cargo/CargoModal';

const API_URL = 'http://localhost:8080/api/cargo';
const ITEMS_PER_PAGE =8;
const CLOSE_MODAL_DELAY = 3000; // 3 segundos

interface CargoResponse {
  content: {
    ativo: boolean;
    descricao: string;
    ordem: number;
    sigla: string;
    idCargo: number;
  }[];
  pageable: {
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number; 
  first: boolean;
  empty: boolean;
}
interface Cargo {
  ativo: boolean;
  descricao: string;
  ordem: number;
  sigla: string;
  idCargo: number;
}

interface Props {
  token: string | null;
  history: any | undefined;
}


const ListarCargos: React.FC<Props> = (props: Props) => {
  const { token } = props;
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [numberOfElements, setNumberOfElements] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpenView, setModalOpenView] = useState<boolean>(false);
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [cargoToDelete, setCargoToDelete] = useState<Cargo | null>(null);
  const [cargoToEdit, setCargoToEdit] = useState<Cargo | null>(null);
  const [cargoToView, setCargoToView] = useState<Cargo | null>(null);
  const [showComponents, setShowComponents] = useState(false);
  const [lastPageSize, setLastPageSize] = useState<number>(0);

  
  const closeModal = () => {
    setTimeout(() => {
      setModalOpen(false);
      setModalOpenView(false);
      setModalOpenEdit(false);
      setCargoToDelete(null);
      setCargoToEdit(null);
      setCargoToView(null);
    }, CLOSE_MODAL_DELAY);
  };

  const  closeModalCancel = () =>{
      setModalOpen(false);
      setModalOpenView(false);
      setModalOpenEdit(false);
      setCargoToDelete(null);
      setCargoToEdit(null);
      setCargoToView(null);
  }

  const handleEditClick = (idCargo: number) => {
    const cargoId = idCargo;
    const cargo = cargos.find((c) => c.idCargo === cargoId);
    if (cargo) {
      setCargoToEdit(cargo);
      setModalOpenEdit(true);
    }
  };

  const handleViewClick = (idCargo: number) => {
    const cargoId = idCargo;
    const cargo = cargos.find((c) => c.idCargo === cargoId);
    if (cargo) {
      setCargoToView(cargo);
      setModalOpenView(true);
    }
  };

  const handleConfirm = () => {
    confirmDelete();
  };


  const handleCloseModal = () => {
    closeModalCancel();
  };
  const listarCargos = async (page = currentPage) => {
    try {
      setIsLoading(true);
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const params = {
        page,
        size: ITEMS_PER_PAGE,
      };
  
      const response = await axios.get<CargoResponse>(API_URL, { headers, params });
      const { numberOfElements, content, totalElements } = response.data;
  
      const lastPageSize = totalElements % ITEMS_PER_PAGE;
      const size = lastPageSize === 0 ? ITEMS_PER_PAGE : lastPageSize;
  
      // Verifica se é a última página e atualiza o tamanho da página, se necessário
      if (page === Math.ceil(totalElements / ITEMS_PER_PAGE) && numberOfElements < ITEMS_PER_PAGE) {
        params.size = size;
      }
      setCargos(content);
      setCurrentPage(page);
      setTotalElements(totalElements);
      setNumberOfElements(numberOfElements);
      setLastPageSize(lastPageSize);
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        props.history.replace('/login');
      } else {
        setError((error as Error)?.message ?? 'An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    const delay = setTimeout(() => {
      listarCargos(0);
    }, 10);
  
    return () => clearTimeout(delay);
  }, [token]);
  
  const handlePageChange = (page: number) => {
    setIsLoading(true);
    listarCargos(page);
  };


  const onDelete = (cargo: Cargo) => {
    setCargoToDelete(cargo);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    if (!cargoToDelete) return;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete(`${API_URL}/${cargoToDelete.idCargo}`, { headers })
      .then(() => {
        setCargos(cargos.filter((cargo) => cargo.idCargo !== cargoToDelete.idCargo));
        closeModal();
      })
      .catch((error: Error) => {
        const errorMessage = error.message || 'Ocorreu um erro';
        setError(errorMessage);
        closeModal();
      });
  };

  const handleEditSubmit = (updatedCargo: Cargo) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .put(`${API_URL}/${updatedCargo.idCargo}`, updatedCargo, { headers })
      .then(() => {
        const index = cargos.findIndex((c) => c.idCargo === updatedCargo.idCargo);
        if (index !== -1) {
          const newCargos = [...cargos];
          newCargos[index] = updatedCargo;
          setCargos(newCargos);
        }
        closeModal();
      })
      .catch((error: Error) => {
        const errorMessage = error.message || 'Ocorreu um erro';
        setError(errorMessage);
        closeModal();
      });
  };

  const onView = (idCargo: number) => {
    if (props.history) {
    props.history.push(`${API_URL}/${idCargo}`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {numberOfElements > 0 ? (
        <>
          <CargoListStyle>
            <caption>List of Cargos</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Sigla</th>
                <th>Ordem</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cargos.map((cargo) => (
                <CargoList
                  key={cargo.idCargo}
                  cargos={[
                    {
                      id: cargo.idCargo,
                      descricao: cargo.descricao,
                      sigla: cargo.sigla,
                      ordem: cargo.ordem,
                      ativo: cargo.ativo,
                    }
                  ]}
                  onDelete={() => onDelete(cargo)}
                  onEdit={() => handleEditClick(cargo.idCargo)}
                  onView={() => handleViewClick(cargo.idCargo)}
                />
              ))}
            </tbody>
          </CargoListStyle>
  
          <PaginationContainer>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalElements={totalElements} 
              itemsPerPage={ITEMS_PER_PAGE}       
              numberOfElements = {numberOfElements}
              />

            <ConfirmationModal
              isOpen={modalOpen}
              onRequestClose={handleCloseModal}
              title="Confirmação"
              message={`Você tem certeza que deseja excluir o cargo ${cargoToDelete?.descricao}?`}
              onConfirm={handleConfirm}
            />
  
            <CargoModal
              isOpen={modalOpenView}
              title="Visualizar - Atualizar Cargo "
              cargo={cargoToView}
              onView={onView}
              onRequestClose={handleCloseModal}
              onSave={handleEditSubmit}
            />
          </PaginationContainer>
        </>
      ) : (
        <>
          <div>
            <p>Não há cargos para mostrar.</p>
          </div>
  
          <PaginationContainer>
            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalElements={totalElements}
                itemsPerPage={ITEMS_PER_PAGE}   
                numberOfElements = {numberOfElements}             
                           />
          </PaginationContainer>
        </>
      )}
    </div>
  );
};

export default ListarCargos;
