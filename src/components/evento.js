function Evento( ) {
 function meuEvento() {
    console.log("Fui ativado")
 }
    return(
    <div>
    <p> Cliqe aqui para disparar um evento</p>
    <button onClick ={meuEvento}>Ativar</button>
    </div>
    )
}

export default Evento