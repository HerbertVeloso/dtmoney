import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal(){
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal(){
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
    </TransactionsProvider>
  );
}