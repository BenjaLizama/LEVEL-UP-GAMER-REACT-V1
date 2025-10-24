import React from "react";
import { render, screen, within } from "@testing-library/react";
import Review from "./Review";
import { ICONS_SOLID } from "../../assets/utils/icons";

describe("Componente Review", () => {
  // -> Test 1: Renderizado de la puntuacion <- \\
  test("Las propiedades de Review son correctas", () => {
    const testProps = {
      autor: "Jose Escalona",
      puntuation: 3,
      review: "Mi polera level up venia amarilla",
    };

    render(<Review {...testProps} />);

    // Verifica que el nombre del autor se renderiza correctamente
    expect(screen.getByText(testProps.autor)).toBeInTheDocument();

    // Verifica que el texto de la reseña se renderiza correctamente
    expect(screen.getByText(testProps.review)).toBeInTheDocument();

    // Verifica que el numero de la puntuacion se renderiza correctamente
    expect(
      screen.getByText(testProps.puntuation.toString())
    ).toBeInTheDocument();

    // Verificacion de estrellas
    const puntuationContainer = screen
      .getByText(testProps.puntuation.toString())
      .closest("span");
    expect(puntuationContainer).toBeInTheDocument();

    const starIcons = within(puntuationContainer).getAllByRole("img", {
      hidden: true,
    });

    expect(starIcons).toHaveLength(5);

    let estrellasPintadas = 0;
    let estrellasNoPintadas = 0;

    starIcons.forEach((star) => {
      const style = window.getComputedStyle(star);
      if (
        style.color === "rgb(235, 175, 10)" ||
        style.color.toLowerCase() === "#ebaf0aff"
      ) {
        estrellasPintadas++;
      } else if (
        style.color === "rgb(207, 207, 207)" ||
        style.color.toLowerCase() === "#cfcfcfff"
      ) {
        estrellasNoPintadas++;
      }
    });

    expect(estrellasPintadas).toBe(testProps.puntuation);
    expect(estrellasNoPintadas).toBe(5 - testProps.puntuation);
  });

  // -> Test 2: Validar que no se pinten estrallas si la puntuacion es 0 <- \\
  test("Renderiza las estrellas correctamente si tiene 0 de puntuacion", () => {
    render(<Review autor="Ana" puntuation={0} review="No me gustó." />);

    const puntuationContainer = screen.getByText("0").closest("span");
    const starIcons = within(puntuationContainer).getAllByRole("img", {
      hidden: true,
    });

    let estrellasPintadas = 0;
    starIcons.forEach((star) => {
      const style = window.getComputedStyle(star);
      if (
        style.color === "rgb(235, 175, 10)" ||
        style.color.toLowerCase() === "#ebaf0aff"
      ) {
        estrellasPintadas++;
      }
    });

    expect(estrellasPintadas).toBe(0);
    expect(starIcons.length - estrellasPintadas).toBe(5);
  });

  // -> Test 3: Validar que se pintan todas las estrellas si la puntuacion es 5 <- \\
  test("Renderiza las 5 estrellas correctamente", () => {
    render(<Review autor="Bilbaolabs" puntuation={5} review="Una maquina" />);

    const puntuationContainer = screen.getByText("5").closest("span");
    const starIcons = within(puntuationContainer).getAllByRole("img", {
      hidden: true,
    });

    let estrellasPintadas = 0;
    starIcons.forEach((star) => {
      const style = window.getComputedStyle(star);
      if (
        style.color === "rgb(235, 175, 10)" ||
        style.color.toLowerCase() === "#ebaf0aff"
      ) {
        estrellasPintadas++;
      }
    });

    expect(estrellasPintadas).toBe(5);
    expect(starIcons.length - estrellasPintadas).toBe(0);
  });
});
