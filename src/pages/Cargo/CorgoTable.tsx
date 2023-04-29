// import React from 'react';
// import { CargoListStyle } from './style';
// import { CargoList } from '../../components/Table';
// import { PaginationContainer } from '../../components/Pagination/PaginationStyle';
// import Pagination from '../../components/Pagination/Pagination';
// import { CargoModal } from './CargoModal';
// import ConfirmationModal from '../../components/Modal/ModalConfirmacao';

// interface CargoTableProps {
//     cargos: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     }[];
//     currentPage: number;
//     totalPages: number;
//     onDelete: (cargo: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     }) => void;
//     onEdit: (id: number) => void;
//     onViewClick: (id: number) => void;
//     modalOpen: boolean;
//     cargoToDelete: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     } | null;
//     onClose: () => void;
//     onConfirm: () => void;
//     modalOpenView: boolean;
//     cargoToView: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     } | null;
//     onView: (id: number) => void;
//     onEditSubmit: (editedCargo: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     }) => void;
//     onPageChange: (page: number) => void;
//     handleCloseModal: () => void;
//     handleConfirm: () => void;
//     title: string;
//     handleDescricaoChange: (editedCargo: {
//         idCargo: number;
//         descricao: string;
//         sigla: string;
//         ordem: number;
//         ativo: boolean;
//     }) => void;
// }

// const CargoTable: React.FC<CargoTableProps> = ({
//     cargos,
//     currentPage,
//     totalPages,
//     onDelete,
//     handleDescricaoChange,
//     onEdit,
//     onViewClick,
//     modalOpen,
//     cargoToDelete,
//     handleCloseModal,
//     onConfirm,
//     onClose,
//     modalOpenView,
//     cargoToView,
//     onView,
//     onEditSubmit,
//     onPageChange,
// }) => {
//     return (
//         <div>
//             {cargos.length > 0 ? (
//                 <>
//                     <CargoListStyle>
//                         <caption>Lista de Cargos</caption>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Descrição</th>
//                                 <th>Sigla</th>
//                                 <th>Ordem</th>
//                                 <th>Ativo</th>
//                                 <th>Ações</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cargos.map((cargo) => (
//                                 <CargoList
//                                     key={cargo.idCargo}
//                                     cargos={[
//                                         {
//                                             id: cargo.idCargo,
//                                             descricao: cargo.descricao,
//                                             sigla: cargo.sigla,
//                                             ordem: cargo.ordem,
//                                             ativo: cargo.ativo,
//                                         },
//                                     ]}
//                                     onDelete={() => onDelete(cargo)}
//                                     onEdit={() => onEdit(cargo.idCargo)}
//                                     onView={() => onViewClick(cargo.idCargo)}
//                                 />
//                             ))}
//                         </tbody>
//                     </CargoListStyle>
//                     <PaginationContainer>
//                         <Pagination
//                             currentPage={currentPage}
//                             totalPages={totalPages}
//                             onPageChange={onPageChange}
//                         />
//                     </PaginationContainer>
//                     {modalOpenView && cargoToView && (
//                         <CargoModal
//                             isOpen={modalOpenView}

//                             cargo={cargoToView} onRequestClose={function (): void {
//                                 throw new Error('Function not implemented.');
//                             } } onSave={function (cargo: Cargo, idCargo: number): void {
//                                 throw new Error('Function not implemented.');
//                             } } onView={function (idCargo: number): void {
//                                 throw new Error('Function not implemented.');
//                             } } title={''}                       
//                         />
//                     )}
//                     {cargoToDelete && (
//                         <ConfirmationModal
//                             isOpen={modalOpen}

//                             onConfirm={onConfirm}
//                             title={`Deseja excluir o cargo ${cargoToDelete.descricao}?`} 
//                             onRequestClose={function (): void {
//                                 throw new Error('Function not implemented.');
//                             } } 
//                             message={''}                   
//                                  />
//                     )}
//                 </>
//             ) : (
//                 <p>Não há cargos cadastrados.</p>
//             )}
//         </div>
//     );
// };

// export default CargoTable;