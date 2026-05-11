import { useState } from "react";
import { ResultBlock, } from "../common/ResultBlock";
import { CustomerSchema, type CustomerDto } from "./zodType";
import { Title,Text, Stack, Button } from "@mantine/core";
import { sleep } from "../../common/tools";
import type { UiState } from "../../common/types";
import { SuccessResultCustomer, } from "./SuccessResultCustomer";
import { apiFetch } from "../../common/http";

const idGood = "a3f767aa-1918-4b0d-a3c9-37e5a0e5f3b2";
const idBad = "a3f767aa-1918-4b0d-a3c9-37e5a0e5f3b3";

export function FetchApi() {
  const [uiState, setUiState] = useState<UiState<CustomerDto>>({ kind: "idle" });

  async function getCustomerById (id: string) {
    setUiState({ kind: "loading" });
    try {
      const urlGetCustomerById = `/api/v1/customers/${encodeURIComponent(id)}`;
      const response = await apiFetch(urlGetCustomerById);
      await sleep(500);
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
    <>
      <Stack mb="md">
        <Title order={2}>API Request (Homepage from HW07)</Title>
        <Title order={3}>It's a public page accessible without Authentication</Title>
        <Text c="gray.6">
            Click on the button below to test API Response.
        </Text>
        <Stack>
          <Button type="button" onClick={() => getCustomerById(idGood)}>
              Good API Response
          </Button>
          <Button type="button" onClick={() => getCustomerById(idBad)}>
              Bad API Response
          </Button>
        </Stack>

        <Stack gap="xs" mb="md">
          <Title order={2}>UI State</Title>
          <Text>Current UI State: {uiState.kind}</Text>
        </Stack>

        <ResultBlock uiState={uiState}>
          {(data) => <SuccessResultCustomer data={data} />}
        </ResultBlock>
      </Stack>
    </>
  );
}

