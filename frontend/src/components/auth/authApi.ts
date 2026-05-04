import { sleep, type ApiError } from "../../common/tools";
import type { AppDispatch , DemoIdentityState, UserType } from "../../context/store";
import { demoIdentityActions } from "../../context/demoIdentitySlice";

export type AuthTokenResponseDto = {
    accessToken: string;
};

export async function fakeRegisterRequest(email: string, password: string, userType: UserType, partnerId: string,
  dispatch: AppDispatch ): Promise<void> {

  await sleep(500);
  dispatch(demoIdentityActions.createUser({ email, password, userType, partnerId }));

  return;
}

export async function fakeLoginRequest(email: string, password: string, demoIdentity: DemoIdentityState): Promise<void> {
  void email;
  void password;

  await sleep(300);

  if (demoIdentity.email !== email || demoIdentity.password !== password) {
    const error: ApiError = {
      kind: "http",
      message: "Unauthorized",
      status: 401,
    };
    throw error;
  }

  return;
}

