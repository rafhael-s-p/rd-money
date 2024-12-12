import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>12/12/2024</td>
          </tr>
          <tr>
            <td>Real Estate Financing</td>
            <td className="withdraw">- $700</td>
            <td>Real Estate</td>
            <td>12/12/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
