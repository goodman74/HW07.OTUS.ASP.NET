import type z from "zod";
import "./SuccessResult.css";
import type { CustomerSchema } from "./zodType";

export type CustomerCardDto = z.infer<typeof CustomerSchema>;

export function SuccessResult({ data }: { data: CustomerCardDto}) {

  return (
    <div className="successBox">
      <h2 >Result</h2>
      <div>
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Preferences:</strong></p>
        <ul>
          {data.preferences.map((pref, index) => (
            <li key={index}>{pref.name}</li>
          ))}
        </ul>
        <p><strong>Promo Codes:</strong></p>
        <ul>
          {data.promoCodes.map((code, index) => (
            <li key={index}>{code.code}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
