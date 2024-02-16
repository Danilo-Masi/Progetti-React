import { render, fireEvent, screen } from "@testing-library/react";
//Componenti
import TodoItem from "./TodoItem";

//Test che verifica se il componente TodoItem mostra il pulsante
//per eliminare l'attività dopo che l'utente ha fatto click sul 
//pulsate con l'icona del cestino

test("load and dispsly greeting", async () =>{
    render(<TodoItem done={false} id="1" text="a todo"/>);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByText("Elimina"));
});