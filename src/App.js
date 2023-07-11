import { useEffect } from "react";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <div className="App" onClick={onCheckout}>
      Hello from react
    </div>
  );
}

export default App;
