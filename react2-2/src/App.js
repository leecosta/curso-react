// Importando o pacote de rota, switch para os paths antigos não sobreporem
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        {/* path é o caminho do url, exemplo localhost:3000/teste, /teste é o path */}
        {/* exact é para o react entender que só irá chamar esse conteúdo se o domínio for exatamente igual o do path */}
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
