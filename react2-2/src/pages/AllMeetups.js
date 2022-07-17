import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// Dados que serão carregados na tela
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];
// Eu chamava ele aqui <MeetupList meetups={loadedMeetups} />

function AllMeetupsPage() {
  // Passar os dados do firebase para a tela, queremos que isso ocorra apenas quando o formulário for enviado
  const [isLoading, setIsLoading] = useState(true);

  // Substituir os dados assim que tiver os dados da API
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect é para carregar a tela apenas em determinadas circunstâncias. Primeiro argumento é uma função (que irá ser executada), segundo argumento é um array (que irá determinar as condições de execução da função)
  useEffect(() => {
    setIsLoading(true);

    // Não precisa colocar o segundo argumento aqui pois será uma solicitação get (padrão)
    fetch(
      "https://react-getting-started-31a30-default-rtdb.firebaseio.com/meetups.json"

      // Da acesso aos dados convertidos automaticamente de js para json
    )
      .then((response) => {
        return response.json();
      })

      // Assim que obtivemos os dados, o estado será falso
      .then((data) => {
        // Transformando os dados do firebase para array

        // Objeto
        const meetups = [];

        // No firebase inicialmente tem uma chave e dentro dela tem o objeto
        for (const key in data) {
          const meetup = {
            id: key, //Pegando o id de cada chave

            //... -> operador spread
            ...data[key], //Copiando cada par dos valores-chave desse objeto para a const meetup
          };

          //Enviando valores do meetup para o objeto meetups
          meetups.push(meetup);
        }

        setIsLoading(false);

        // Passando os dados obtidos para a variável loadedMeetups
        setLoadedMeetups(meetups);
      });
    // Colocar dependências externas, no caso não tem (o useState é reconhecido automaticamente). Se não tem dependência externa, o código é executado apenas na primeira vez que a página for renderizada, então para isso não ocorrer definimos o setIsLoading para true no início do useEffect
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>

      {/* Chamando o arquivo loadedMeetups, meetups é o que ele vai reconhecer como props */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
