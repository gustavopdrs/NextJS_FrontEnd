import { useState, useEffect } from "react";
import Navbar from './navbar'
import PieChart from "./piechart";
function CSR() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/estoque`)
            .then(response => response.json())
            .then(json => setLista(json))
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <h1>Estoque</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Estoque</th>
                        <th>Descricao</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.estoque}</td>
                                <td>{obj.descricao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <PieChart></PieChart>
            <PieChart></PieChart>
        </div>
    )
}

export default CSR;