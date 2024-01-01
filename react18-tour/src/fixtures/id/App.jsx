import Form from "./Form";
import Log from "./Log";
import PasswordField from "./PasswordField";

const Id = () => {
  return (
    <>
      <h3>基本打印</h3>
      <Log />
      <h3>Generating unique IDs for accessibility attributes</h3>
      <PasswordField />
      <PasswordField />
      <h3>Generating IDs for several related elements</h3>
      <Form/>
    </>
  );
};

export default Id