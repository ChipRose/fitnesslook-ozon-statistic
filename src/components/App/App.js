import TableSale from "../TableSale/TableSale";
import { products, getHeaderCells } from '../../mocks/mocks';
import ThemeHook from "../../hooks/ThemeHook";

function App() {
  return (
    <ThemeHook >
      <TableSale data={products} headerData={getHeaderCells()}></TableSale>
    </ThemeHook>
  );
}

export default App;
