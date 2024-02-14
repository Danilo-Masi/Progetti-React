import { render, fireEvent, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

test("load and dispsly greeting", async () =>{
    render(<TodoItem done={false} id="1" text="a todo"/>);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByText("Elimina"));
});