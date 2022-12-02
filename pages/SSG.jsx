import Navbar from './navbar'
import LineChart from './linechart';
function SSG({ funcionarios }) {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Funcionários</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*
                        funcionarios.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cargo}</td>
                            </tr>
                        ))
                        */
                    }
                </tbody>
            </table>
            <div><LineChart></LineChart><LineChart></LineChart></div>
        </div>
    )
}

export default SSG;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/funcionarios`);
    const funcionarios = await res.json();

    return {
        props: {
            funcionarios
        }
    }
}