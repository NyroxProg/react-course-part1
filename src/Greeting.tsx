interface Props {
  name?: string;
  hour?: number;
}

function Greeting({ name = "World", hour = new Date().getHours() }: Props)
  const greeting =
    hour >= 17
      ? "Good eventing"
        : hour >= 12
      ? "Good afternoon"
        : hour >= 0
      ? "Good morning"
        : "Hello";

return (
  <div>
    {greeting} {name || "World"}
  </div>
  );
}

export default Greeting;
