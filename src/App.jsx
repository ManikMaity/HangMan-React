import Button from "./Components/Button/Button";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">Hello!</h1>
      <Button
        text="Primary"
        btnType="submit"
        styleType="primary"
        onClickFn={function logHello() {
          console.log("Primary Clicked");
        }}
      />
      <Button
        text="Secondary"
        btnType="button"
        styleType="secondary"
        onClickFn={function logHello() {
          console.log("Secondary Clicked");
        }}
      />
      <Button text="Warning" />
    </div>
  );
}

export default App;
