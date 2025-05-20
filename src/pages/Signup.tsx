import { useState } from "react";
import { Button, Input } from "../components";

function Signup() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="p-6">
      <Input
        title="닉네임"
        placeholder="닉네임 입력"
        description="1~20자 이내, 특수문자 제외"
      />
      <div className="flex items-center w-full gap-2">
        <button
          onClick={() => setChecked(!checked)}
          className={`w-4 h-4 border rounded ${
            checked ? "bg-optic-500" : "bg-zinc-900"
          } border-zinc-600`}
        />
        <p className="text-medium14 text-zinc-500">
          [필수] 서비스 이용 약관에 동의합니다.
        </p>
      </div>
      <Button title="다음" />
    </div>
  );
}

export default Signup;
