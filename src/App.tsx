import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { About } from "./components/About";

function App() {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName: string) => {
    setPage(pageName);
  };

  return (
    <div>
      <Header navigateTo={navigateTo} />
      {page === 'home' && <Form />}
      {page === 'about' && <About />}
    </div>
  )
}

export default App;
