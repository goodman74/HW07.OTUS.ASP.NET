import './ErrorResult.css';

type ErrorResultProps = {
  errorMessage: string;
};

export function ErrorResult({ errorMessage }: ErrorResultProps) {

  return (
    <div className="errorBox">
      <h2>Error</h2>
      <p>{errorMessage ?? "An error occurred."}</p>
    </div>
  );
}
