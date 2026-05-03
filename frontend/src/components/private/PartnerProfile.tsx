import { Stack } from "@mantine/core";
import { useAppSelector } from "../../context/store";
import { useEffect, useState } from "react";
import { sleep } from "../../common/tools";
import type { UiState } from "../../common/types";
import { PartnerSchema, type PartnerDto } from "../public/zodType";
import { ResultBlock } from "../common/ResultBlock";
import { SuccessResultPartnerProfile } from "./SuccessResultPartnerProfile";

export function PartnerProfile() {
  const partnerId = useAppSelector(state => state.demoIdentity.partnerId);
  const [uiState, setUiState] = useState<UiState<PartnerDto>>({ kind: "idle" });

  useEffect(() => {
    async function loadPartner() {
      setUiState({ kind: "loading" });

      try {
        if (!partnerId) {
          setUiState({ kind: "error", message: "No partnerId in state" });
          return;
        }

        const url = `/api/v1/partners/${encodeURIComponent(partnerId)}`;
        const response = await fetch(url);

        await sleep(500);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        const data = PartnerSchema.parse(json);
        setUiState({ kind: "success", data });

      } catch (error) {
        console.error("Failed to load partner:", error);
        setUiState({ kind: "error", message: (error as Error).message });
      }
    }

    void loadPartner();
  }, [partnerId]);

  return (
    <>
      <Stack mb="md">
        <ResultBlock uiState={uiState}>
          {(data) => <SuccessResultPartnerProfile data={data} />}
        </ResultBlock>
      </Stack>
    </>
  );
}


