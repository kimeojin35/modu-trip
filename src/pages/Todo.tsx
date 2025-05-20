import { useEffect, useState } from "react";
import { Check, Plus } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

type FilterType = "shared" | "my";

function Todo() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentFilter = (searchParams.get("filter") as FilterType) || "shared";

  const [activeTab, setActiveTab] = useState<FilterType>("shared");

  useEffect(() => {
    setActiveTab(currentFilter);
  }, [currentFilter]);

  const handleTabClick = (tab: FilterType) => {
    if (tab !== activeTab) {
      searchParams.set("filter", tab);
      navigate({
        pathname: location.pathname,
        search: searchParams.toString(),
      });
    }
  };

  const Category = ({ clicked }: { clicked?: boolean }) => {
    return (
      <button
        className={`py-1.5 pl-4 pr-2 flex rounded-full justify-center items-center border border-zinc-700 gap-2 ${
          clicked ? "bg-white" : "bg-zinc-800"
        }`}
      >
        <p className={`text-medium14 ${clicked ? "text-black" : "text-white"}`}>
          전체
        </p>
        <div
          className={`flex items-center justify-center rounded-full h-6 w-6 ${
            clicked ? "bg-zinc-200" : "bg-zinc-700"
          }`}
        >
          <p
            className={`text-medium14 ${
              clicked ? "text-zinc-800" : "text-zinc-200"
            }`}
          >
            6
          </p>
        </div>
      </button>
    );
  };

  const List = () => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
      <div className="flex items-center w-full gap-4 py-3">
        <div className="flex items-center w-full gap-3">
          <p
            className={`${
              checked ? "text-zinc-400 line-through" : "text-white"
            } text-medium18`}
          >
            숙소 예약해놓기
          </p>
          <p className="text-medium14 text-zinc-500">3월 29일까지</p>
        </div>
        <button
          onClick={() => setChecked((prev) => !prev)}
          className={`min-w-8 h-8 flex justify-center items-center rounded-full ${
            checked ? "bg-optic-500" : "bg-zinc-900 border border-zinc-700"
          }`}
        >
          {checked && <Check className="text-zinc-900" />}
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full border-b border-b-zinc-800">
        <button
          className={`flex items-center justify-center w-full p-4 border-b ${
            activeTab === "shared"
              ? "border-b-white text-white"
              : "border-b-transparent text-zinc-400"
          }`}
          onClick={() => handleTabClick("shared")}
        >
          <p className="text-medium16">같이 할 일</p>
        </button>
        <button
          className={`flex items-center justify-center w-full p-4 border-b ${
            activeTab === "my"
              ? "border-b-white text-white"
              : "border-b-transparent text-zinc-400"
          }`}
          onClick={() => handleTabClick("my")}
        >
          <p className="text-medium16">내가 할 일</p>
        </button>
      </div>
      <div className="flex flex-col w-full min-h-screen gap-6 p-6">
        <div className="flex flex-col gap-2 pt-4">
          <p className="text-semibold24">같이 해야하는 일 24개</p>
          <p className="text-zinc-500 text-medium16">
            본인의 일은 미리미리 끝내놓아요!
          </p>
        </div>
        <div className="flex items-center w-full gap-2">
          <div className="flex w-full gap-4">
            <Category clicked={true} />
            <Category clicked={false} />
          </div>
          <button className="py-2 pl-2 pr-1">
            <Plus className="text-white" />
          </button>
        </div>
        <div className="flex flex-col w-full">
          <List />
          <List />
          <List />
        </div>
      </div>
    </>
  );
}

export default Todo;
