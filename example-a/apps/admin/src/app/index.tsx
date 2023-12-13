import * as React from "react";
import "./styles.css";
import { Th } from "@ui/table";

function App(): JSX.Element {
  return (
    <table>
      <tbody>
        <tr>
          <Th>styled th</Th>
        </tr>
        <tr>
          <td>test</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
