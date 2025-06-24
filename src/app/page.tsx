"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 px-4 py-10">
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">모두의 여행 ✈️</h1>
        <p className="text-muted-foreground mt-2">
          함께 여행을 계획하고 추억을 나눠보세요
        </p>
      </div>

      {/* 여행 생성 CTA */}
      <Button className="w-full max-w-sm text-base" size="lg">
        ✨ 새로운 여행 만들기
      </Button>

      {/* 여행 목록 예시 */}
      <section className="w-full max-w-sm mt-6 space-y-4">
        <h2 className="text-lg font-semibold">내 여행</h2>
        <ul className="space-y-2">
          <li className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="font-medium">제주도 3박 4일</div>
            <div className="text-sm text-muted-foreground">
              2024.09.01 ~ 09.04
            </div>
          </li>
          <li className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="font-medium">일본 도쿄 가을여행 🍁</div>
            <div className="text-sm text-muted-foreground">
              2024.10.15 ~ 10.20
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
