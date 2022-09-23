export default function TableRows({
  account,
  handleRecordChange,
  selectedRecord,
}) {
  return (
    <>
      <tr
        key={account.Account.toString()}
        onClick={() => handleRecordChange(account)}
      >
        <td>{account.AcctType}</td>
        <td>{account.Account}</td>
        <td>{account.Description}</td>
        <td>{account.Department}</td>
        <td>{account.TypicalBal}</td>
        <td>{account.DebitOffset}</td>
        <td>{account.CreditOffset}</td>
      </tr>
      {/* Selected */}
    </>
  );
}
