import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isactive={type === 'deposit'}
            activecolor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isactive={type === 'withdraw'}
            activecolor="red"
          >
            <img src={outcomeImg} alt="Withdraw" />
            <span>Withdraw</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Category'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>
          Register
        </button>
      </Container>
    </Modal >
  );
}
