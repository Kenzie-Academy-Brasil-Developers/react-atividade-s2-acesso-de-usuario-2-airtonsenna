import { useParams, Link } from "react-router-dom";


const Costumer = ({ members }) => {
    let {id} = useParams()

    const member = members.find(element => element.id === id)

    return (
        <div>
            <h1>Detalhes do cliente</h1>

            <p>
                Nome: {member && member.name}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}

export default Costumer