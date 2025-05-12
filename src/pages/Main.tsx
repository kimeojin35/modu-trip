import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Arrow, Calendar, Copy } from "../assets";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full min-h-screen gap-6 p-6">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-zinc-800">
        <div className="relative flex flex-col md:flex-row">
          <div className="relative flex-grow p-6 text-zinc-100">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-6">
                <div className="bg-opacity-20 bg-optic-500 px-2.5 py-1 rounded w-fit">
                  <p className="text-medium12 text-optic-500">D-19</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white text-semibold24">
                    일본 도쿄
                    <br />
                    여행일까지 19일 남았어요!
                  </p>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar size={20} />
                    <p className="text-medium14">1월 28일 - 1월 30일</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex p-1 border rounded bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <Copy size={14} className="text-zinc-400" />
                </button>
                <p className="text-zinc-400 text-medium14">123456</p>
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 py-6">
              <div className="flex items-center justify-between w-full">
                <p className="text-medium14 text-zinc-400">우리 여행 진행률</p>
                <p className="text-medium14 text-optic-500">48%</p>
              </div>
              <div className="flex w-full h-1.5 overflow-hidden rounded-full bg-zinc-700">
                <div className="w-2/5 h-2 bg-optic-500"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-medium14 text-zinc-400">출발</p>
                <p className="text-semibold20">한국 대전</p>
                <p className="text-medium14 text-zinc-300">10:00 AM</p>
              </div>

              <div className="flex items-center gap-1 p-2 border-t text-medium14 text-optic-400 border-t-zinc-600">
                <Arrow size={14} />
                <span>5시간 30분</span>
              </div>

              <div className="text-right">
                <p className="text-medium14 text-zinc-400">도착</p>
                <p className="text-semibold20">일본 도쿄</p>
                <p className="text-medium14 text-zinc-300">3:30 PM</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full md:flex-col md:w-auto">
            <div className="self-center w-4 h-8 md:w-8 md:h-4 bg-[#111] rounded-r-full md:rounded-tr-none md:rounded-b-full" />
            <span className="w-full border-b-2 border-dashed border-zinc-600 md:border-b-0 md:border-l-2 md:h-full md:w-0" />
            <div className="self-center w-4 h-8 md:w-8 md:h-4 bg-[#111] rounded-l-full md:rounded-bl-none md:rounded-t-full" />
          </div>

          <div className="flex flex-col gap-4 p-4 text-zinc-100 md:w-64">
            <div className="text-center">
              <h3 className="text-white text-medium16">우리 여행 그룹</h3>
              <p className="text-medium14 text-zinc-400">햄이네 도쿄 여행단</p>
            </div>

            <div>
              <p className="text-medium12 text-zinc-400">그룹원</p>
              <div className="flex justify-between text-medium16">
                햄, 주니어 외 2명
                <div
                  onClick={() => navigate("/group")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="flex items-center relative space-x-[-8px]">
                    <div className="w-6 h-6 bg-white border rounded-full border-zinc-600" />
                    <div className="w-6 h-6 bg-white border rounded-full border-zinc-600" />
                    <div className="w-6 h-6 bg-white bg-center bg-no-repeat bg-cover border rounded-full border-zinc-600" />
                  </div>
                  <Arrow className="text-zinc-500" size={16} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-medium12 text-zinc-400">목표</p>
              <p className="text-medium16">아 진짜 가자</p>
            </div>

            <button className="w-full px-3 py-2 text-white rounded text-medium14 bg-zinc-700 hover:bg-zinc-600">
              날씨 확인하기
            </button>

            <div className="flex items-center justify-center w-full h-full py-3">
              <QRCodeCanvas
                value={""}
                size={64}
                bgColor="transparent"
                fgColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
