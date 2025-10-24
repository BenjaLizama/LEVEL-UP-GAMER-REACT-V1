import React from "react";
import { ICONS_SOLID } from "../../assets/utils/icons";
import { fireEvent, render, screen } from "@testing-library/react";
import styles from "../../styles/Input.module.css";
import Input from "./Input";
import { icon } from "@fortawesome/fontawesome-svg-core";

describe("Componente Input", () => {
  const inputPropsEmail = {
    label: "Correo",
    icon: ICONS_SOLID.email,
    type: "text", // <- Por defecto es "text"
  };

  // -> Test 1: Renderizado basico del Input <- \\
  test("Renderizado del label, icono y texto dentro del input correctamente", () => {
    render(<Input {...inputPropsEmail} />);

    // Verifica que label se renderiza correctamente
    expect(screen.getByText(inputPropsEmail.label)).toBeInTheDocument();

    // Verifica que el label (span) se renderiza correctamente
    // y que este contenga la clase correcta
    expect(screen.getByText(inputPropsEmail.label)).toBeInTheDocument();
    expect(screen.getByText(inputPropsEmail.label)).toHaveClass(styles.label);

    // Buscamos el input por su ROL y que se esta renderizando
    const inputElementEmail = screen.getByRole("textbox");
    expect(inputElementEmail).toBeInTheDocument();

    // Verificamos el type del input
    expect(inputElementEmail).toHaveAttribute("type", inputPropsEmail.type);

    // Encontramos el contenedor padre usando inputElementEmail
    const container = inputElementEmail.parentElement;
    expect(container).not.toBeNull();

    // Busca el SVG dentro del contenedor padre
    const iconoSvg = container?.querySelector("svg[data-icon]");

    // Verifica que el SVG fue encontrado
    expect(iconoSvg).toHaveAttribute(
      "data-icon",
      inputPropsEmail.icon.iconName
    );
  });

  // -> Test 2: Simular escritura <- \\
  test("Permite al usuario escribir dentro del campo", () => {
    render(<Input {...inputPropsEmail} />);

    // Buscamos el input por ROL
    const inputElementEmail = screen.getByRole("textbox");

    fireEvent.change(inputElementEmail, { target: { value: "Escribi test" } });
    expect(inputElementEmail).toHaveValue("Escribi test");
  });

  // -> Test 3: Simular pulsacion del boton limpiar <- \\
  test("Simula el uso del usuario sobre el boton limpiar", () => {
    render(<Input {...inputPropsEmail} />);

    // Obtener el input por ROL
    const inputElementEmail = screen.getByRole("textbox");

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    fireEvent.change(inputElementEmail, {
      target: { value: "Estoy escribiendo" },
    });
    const botonLimpiar = screen.getByRole("button");
    expect(botonLimpiar).toBeInTheDocument();
    expect(botonLimpiar.querySelector("svg")).toHaveAttribute(
      "data-icon",
      ICONS_SOLID.xmark.iconName
    );
    fireEvent.click(botonLimpiar);
    expect(inputElementEmail).toHaveValue("");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
