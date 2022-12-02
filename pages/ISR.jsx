import Navbar from './navbar'
import Scatter from './scatter'
function ISR({ notas }) {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Notas Fiscais</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data</th>
                        <th>Pagamento</th>
                        <th>Serial</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*
                        notas.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.data}</td>
                                <td>{obj.pagamento}</td>
                                <td>{obj.serial}</td>
                            </tr>
                        ))
                        */
                    }
                </tbody>
            </table>
            <div><Scatter></Scatter><Scatter></Scatter></div>
        </div>
    )
}

export default ISR;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notas`);
    const notas = await res.json();

    return {
        props: {
            notas
        }, revalidate :30
    }
}