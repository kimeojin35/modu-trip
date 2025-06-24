"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Main() {
  return (
    <main className="px-4 py-6 space-y-6">
      {/* 여행 제목 & 날짜 */}
      <section className="space-y-1">
        <h1 className="text-2xl font-bold">제주도 3박 4일</h1>
        <p className="text-muted-foreground text-sm">2024.09.01 ~ 09.04</p>
      </section>

      {/* 참여자 아바타 */}
      <section>
        <h2 className="text-sm font-semibold mb-2">함께하는 친구들</h2>
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="/avatars/01.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatars/02.png" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* 일정 요약 리스트 */}
      <section className="space-y-2">
        <h2 className="text-sm font-semibold mb-1">계획된 일정</h2>
        <ul className="space-y-2">
          <li className="p-4 bg-white shadow-sm rounded-lg border">
            <div className="font-medium">1일차 - 공항 도착 & 렌트</div>
            <div className="text-sm text-muted-foreground">09:00 ~ 12:00</div>
          </li>
          <li className="p-4 bg-white shadow-sm rounded-lg border">
            <div className="font-medium">2일차 - 우도 배 타기</div>
            <div className="text-sm text-muted-foreground">10:00 ~ 14:00</div>
          </li>
        </ul>
      </section>

      {/* 공유 및 추가 버튼 */}
      <div className="flex gap-2 justify-end pt-4">
        <Button variant="outline">공유하기</Button>
        <Button>+ 계획 추가</Button>
      </div>
    </main>
  );
}
