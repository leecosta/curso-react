// Importando pacote para conseguir trocar de página assim que o formulário for enviado
import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //Constante que tem métodos para conseguir trocar de página assim que o formulário for enviado, por exemplo
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // Função que permite enviar solicitações HTTP, primeiro colocamos o url para o qual queremos enviar um pedido, lembrar de colocar o (path).json da tabela e depois colocamos um segundo argumento como especificações
    fetch(
      "https://react-getting-started-31a30-default-rtdb.firebaseio.com/meetups.json",
      {
        // Definindo o método que será usado, no caso POST
        method: "POST",

        // stringify podemos passar objetos js/arrays e eles serão convertidos para json
        body: JSON.stringify(meetupData),

        // Adicionando cabeçalho do tipo conteúdo e configurando para json para adicionar esses dados à solicitação de saída e deixar bem claro que esta solicitação carrega dados json
        headers: {
          "Content-Type": "application/json",
        },
      }

      // Função que será executada assim que o fetch for cumprido
    ).then(() => {
      // push envia para uma nova página
      // history.push("/");
      // Diferença do replace para o push???????
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
