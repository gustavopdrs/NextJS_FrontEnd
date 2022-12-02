import Navbar from './navbar'
function SSR({ entregas }) {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Controle Pet Shop</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Descricao</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        entregas.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.data_estimada}</td>
                                <td>{obj.descricao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/entregas`);
    const entregas = await res.json();

    return {
        props: {
            entregas
        }
    }
}