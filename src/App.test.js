import { render, screen } from "@testing-library/react";
import App from "./App";
import Main from "./components/Main/Main";

beforeEach(() => render(<Main></Main>));

describe("Componente Main", () => {
  it("Debe mostrar el titulo", () => {
    expect(screen.queryByText(/Dog CEO/i)).toBeInTheDocument();
  });

  it("Debe mostrar la descripción", () => {
    expect(screen.queryByText(/mejor amigo/i)).toBeInTheDocument();
  });
});
