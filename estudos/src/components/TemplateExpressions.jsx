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
      </h1>
    </>
  );
};

export default TemplateExpressions;
