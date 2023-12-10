import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Log In" : <Spinner />}
          </Button>
        </FormRowVertical>
      </Form>
      <div>
        <p
          style={{
            border: "1px solid #bebef0",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "5px",
            textAlign: "center",
          }}
        >
          Put <span style={{ color: "red" }}>reza@example.com</span> as email
          address
        </p>
        <p
          style={{
            border: "1px solid #bebef0",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Put <span style={{ color: "red" }}>123456</span> as password
        </p>
      </div>
    </>
  );
}

export default LoginForm;
