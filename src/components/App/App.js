import EnhancedTable from "../EnhancedTable/EnhancedTable";
import { navs } from '../../mocks/mocks';

function App() {
  return (
    <div className="App">
      <EnhancedTable data={navs}></EnhancedTable>
    </div>
  );
}

export default App;
