import Display from "./components/Display";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="bg-slate-800 flex min-h-screen text-wrap flex-col justify-between">
      <Header />
      <>
        <Display />
        <Form />
      </>
    </main>
  );
};

export default App;
