import { useState } from "react";
import { ErrorResult } from "./ErrorResult";
import { SuccessResult, type CustomerCardDto } from "./SuccessResult";
import { CustomerSchema } from "./zodType";

type UiState =
| { kind:"idle"}
| { kind: "loading" }
| { kind: "success"; data: CustomerCardDto }
| { kind: "error"; message: string };

const idGood = "a3f767aa-1918-4b0d-a3c9-37e5a0e5f3b2";
const idBad = "a3f767aa-1918-4b0d-a3c9-37e5a0e5f3b3";

export function FetchApi() {
  const [uiState, setUiState] = useState<UiState>({ kind: "idle" });

  async function getCustomerById (id: string) {
    setUiState({ kind: "loading" });
    try {
      const urlGetCustomerById = `/api/v1/customers/${encodeURIComponent(id)}`;
      const response = await fetch(urlGetCustomerById);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      // Валидация данных с помощью Zod
      const data = CustomerSchema.parse(json);

      setUiState({ kind: "success", data });

    } catch (error) {
      setUiState({ kind: "error", message: (error as Error).message });
    }
  };

  return (
    <div className="layout-section">
      <div>
        <h2>API Request</h2>
        <div>
          <p>
            Click on the button below to test API Response.
          </p>
        </div>
        <div className="actions">
          <button type="button" onClick={() => getCustomerById(idGood)}>
              Good API Response
          </button>
          <button type="button" onClick={() => getCustomerById(idBad)}>
              Bad API Response
          </button>
        </div>
      </div>

      <div>
        <h2>UI State</h2>
        <p>Current UI State: {uiState.kind}</p>
      </div>

      <ResultBlock uiState={uiState} />

    </div>
  );
}

function ResultBlock({ uiState }: { uiState: UiState }) {
  switch (uiState.kind) {
  case "idle":
    return <p>Start request...</p>;

  case "loading":
    return <p>Loading...</p>;

  case "success":
    return <SuccessResult data={uiState.data} />;

  case "error":
    return <ErrorResult errorMessage={uiState.message} />;
  }
  // если появится новый kind не описанный в switch TS упадёт здесь
  const _exhaustive: never = uiState;
  return _exhaustive;
}
