import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  const name = "matheus";

  const data = {
    segundoNome: "joao",
    terceiroNome: "Zezinho",
  };

  return (
    <>
      <h1>
        Ola {name}! <br />
        {data.segundoNome}
        {5 + 5}
      </h1>

      <MyComponent />
    </>
  );
};

export default TemplateExpressions;
