import { Button, Input } from "../components";

 function Login() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>
      <form className="w-full max-w-sm space-y-4">
        <Input title="이메일" placeholder="이메일을 입력하세요" />
        <Input type="password" title="비밀번호" placeholder="비밀번호를 입력하세요" />
        <Button title="로그인"/>
      </form>
    </div>
  );
}

export default Login