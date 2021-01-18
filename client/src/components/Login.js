import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Header, Button, Form, Segment } from "semantic-ui-react";

export default (props) => {
  //init email and password for login
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  //call the handlelogin function
  const { handleLogin, loading } = useContext(AuthContext);

  //handle form submition
  const handleSubmit = () => {
    handleLogin({ email, password }, props.history);
  };

  return (
    <>
      <Segment>
        <Header as="h1" textAlign="center">
          Login
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Segment basic textAlign="center">
            <Button loading={loading} disabled={loading} type="submit">login</Button>
          </Segment>
        </Form>
      </Segment>
    </>
  );
};
