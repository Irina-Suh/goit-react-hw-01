
const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
      <tr className="transaction-item">
        <td className="transaction-type">{type}</td>
        <td className="transaction-amount">{amount}</td>
        <td className="transaction-currency">{currency}</td>
      </tr>
    );
  };
  
  export default TransactionHistoryItem;