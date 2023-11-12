import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate('processos');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      layout="vertical"
      className="flex flex-col h-screen justify-center items-center gap-1"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Usuário"
        name="username"
        rules={[{ required: true, message: 'Usuário é obrigatório!' }]}
      >
        <Input className="w-64" />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Senha é obrigatória!' }]}
      >
        <Input.Password className="w-64" />
      </Form.Item>

      <Form.Item>
        <Button type="default" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
