import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulated, transaction) => {
    if (transaction.type === 'deposit') {
      accumulated.deposits += transaction.amount;
      accumulated.total += transaction.amount;
    } else {
      accumulated.withdraw += transaction.amount;
      accumulated.total -= transaction.amount;
    }

    return accumulated;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
        {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>
        - {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
