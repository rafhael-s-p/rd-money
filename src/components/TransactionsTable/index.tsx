import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

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
