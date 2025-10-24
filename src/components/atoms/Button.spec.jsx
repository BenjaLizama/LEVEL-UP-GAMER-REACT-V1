import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Componente Button", () => {
  // -> Test 1: Verifica que el boton se renderiza correctamente <- \\
  test("Renderiza botón", () => {
    const mockSaludar = jest.fn();

    const propsButton = {
      type: "button",
      text: "Soy un boton de prueba",
      onClick: mockSaludar,
    };

    render(<Button {...propsButton} />);

    const buttonElemet = screen.getByRole("button", {
      name: "Soy un boton de prueba",
    });

    // Verifica que el boton exista dentro del DOM
    expect(buttonElemet).toBeInTheDocument();

    // Verifica que el boton tenga el atributo 'button'
    expect(buttonElemet).toHaveAttribute("type", "button");

    // Verifica que el boton tenga el texto correcto
    expect(buttonElemet).toHaveTextContent("Soy un boton de prueba");

    // Simula el click del boton
    fireEvent.click(buttonElemet);

    // Verifica que la funcion 'mockSaludar' fue llamada una vez
    expect(mockSaludar).toHaveBeenCalledTimes(1);
  });
});
