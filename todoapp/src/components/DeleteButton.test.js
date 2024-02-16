import { render } from "@testing-library/react";
//Componenti
import DeleteButton from "./DeleteButton";

//Test che verifica se il componente DeleteButton viene renderizzato correttamente
test("renders the delete button", () => {
    render(<DeleteButton />);
});