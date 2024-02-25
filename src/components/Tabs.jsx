export default function Tabs({
  children,
  buttons,
  buttonContainer = "menu",
  ...props
}) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
