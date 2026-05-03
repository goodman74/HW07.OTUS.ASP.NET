import { useState,  } from "react";
import { Modal, TextInput, PasswordInput, Button, Stack, Text, Box } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../context/store";
import { fakeLoginRequest } from "./authApi";
import { authActions } from "../../context/authSlice";
import { isApiError } from "../../common/tools";

type LoginModalProps = {
  opened: boolean;
  onClose: () => void;
  onLogon?: () => void;
};

export function LoginModal({ opened, onClose, onLogon }: LoginModalProps) {
  const dispatch = useAppDispatch();
  const demoIdentity = useAppSelector(state => state.demoIdentity);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");

  const clearError = () => {
    if (errorText) setErrorText("");
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
    clearError();
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
    clearError();
  };

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    setSubmitting(true);
    setErrorText("");

    try {
      await fakeLoginRequest(email.trim(), password, demoIdentity);
      dispatch(authActions.login());

      onLogon?.();
      onClose();
    } catch (e: unknown) {

      if (isApiError(e) && e.kind === "http" && e.status === 401) {
        setErrorText("Неверный email или пароль.");
        return;
      }

      setErrorText("Проблема с сервером. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal opened={opened} onClose={onClose} centered size="xs"
      title={<Text fw={700} c="gray.2">Login</Text>}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      classNames={{
        header: "auth-modal-header",
      }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack gap="lg" pt="sm" >
          <TextInput
            className="input-field"
            label={<Text fw={500} c="gray.5">Email</Text>}
            value={email}
            onChange={(e) => onChangeEmail(e.currentTarget.value)}
            required
            autoComplete="email"
          />

          <PasswordInput
            className="input-field"
            label={<Text fw={500} c="gray.5">Password</Text>}
            value={password}
            onChange={(e) => onChangePassword(e.currentTarget.value)}
            required
            autoComplete="current-password"
          />

          <Text c="red.6" size="sm" mih="lg">
            {errorText}
          </Text>
        </Stack>

        <Box pt="sm" style={{ textAlign: "center" }}>
          <Button type="submit" loading={submitting} color="green">Login</Button>
        </Box>
      </Box>
    </Modal >
  );
}
