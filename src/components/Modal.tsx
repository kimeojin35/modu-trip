import { useState } from "react";
import { Arrow, Clock, Close, Map_Pin, Plus, Users } from "../assets";

interface ModalProps {
  onChange?: string;
}

export const Modal = () => {
  const [newTask, setNewTask] = useState<string>("");
  const handleEnter = () => {};
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-3 p-4 rounded-lg bg-zinc-800 w-96">
        <div className="flex justify-between w-full">
          <p className="text-white text-medium16">새 일정</p>
          <button className="transition-all text-zinc-400 hover:text-optic-500">
            <Close size={20} />
          </button>
        </div>
        <input
          className="p-2 text-white transition-all border-b rounded-t-md bg-zinc-700 border-b-zinc-500 focus:border-b-optic-500 focus:bg-zinc-900 placeholder:text-zinc-500 text-semibold20"
          placeholder="제목"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          className="w-full bg-transparent text-zinc-400 placeholder:text-zinc-500 text-medium14"
          placeholder="설명"
        />
        <div className="flex items-center gap-3 cursor-pointer text-zinc-500">
          <Clock size={18} />
          <div className="flex items-center gap-2 text-zinc-400">
            <p className="text-medium14">4월 30일 (수)</p>
            <Arrow className="text-zinc-500" size={16} />
            <p className="text-medium14 text-zinc-400">
              오전 11:00 - 오후 12:00
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-zinc-400">
            <Users size={18} />
            <span className="text-medium14">참석자</span>
          </div>
          <div className="flex flex-wrap gap-2 pl-7">
            {["김햄", "이연어"].map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 px-2 py-1 text-sm text-white rounded-md bg-zinc-700"
              >
                {name}
                <button className="text-zinc-400 hover:text-red-400">
                  <Close size={12} />
                </button>
              </div>
            ))}
            <button className="px-2 py-1 text-sm transition-colors rounded-md bg-zinc-600 text-zinc-400 hover:bg-zinc-500">
              + 추가
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-zinc-400">
            <Map_Pin size={18} />
            <span className="text-medium14">위치</span>
          </div>
          <div className="flex gap-2 pl-7">
            <input
              type="text"
              placeholder="장소를 입력하세요"
              className="w-full px-3 py-1 text-sm text-white transition-all border rounded-md bg-zinc-700 border-zinc-600 placeholder:text-zinc-500 focus:border-optic-500 focus:bg-zinc-800"
            />
            <button className="px-2 py-1 text-sm transition-colors rounded-md bg-zinc-600 text-zinc-400 hover:bg-zinc-500">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {}}
            className="px-3 py-1 transition-all rounded-md text-zinc-900 text-medium14 bg-optic-500 hover:bg-optic-600"
          >
            만들기
          </button>
        </div>
      </div>
    </div>
  );
};
