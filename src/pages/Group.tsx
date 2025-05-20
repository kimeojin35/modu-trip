import React from 'react';
import { Topbar } from '../components/Topbar';
import { Arrow_Long, Copy } from '../assets';
import { useNavigate } from 'react-router-dom';

function Group() {
	const navigate = useNavigate();
	const Profile = ({
		my,
		name,
		tendency,
		todos,
	}: {
		my?: boolean;
		name: string;
		tendency: string;
		todos: number;
	}) => (
		<div className="flex items-center w-full gap-4 py-3">
			<div className="flex flex-col w-full gap-4">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 border rounded-xl bg-zinc-800 border-zinc-700" />
					<div className="flex flex-col gap-0.5">
						<p className="text-white text-medium16">{name}</p>
						<p className="text-zinc-400 text-medium14">
							{tendency} · 할 일 {todos}개
						</p>
					</div>
				</div>
			</div>
			{my && (
				<button className="flex items-center gap-3">
					<p className="text-optic-500 text-medium16">MY</p>
					<Arrow_Long size={20} className="text-zinc-600" />
				</button>
			)}
		</div>
	);

	return (
		<div className="flex flex-col gap-6 px-6 pt-20 pb-6">
			<Topbar title="그룹" />
			<div className="flex flex-col gap-2 pt-4">
				<div className="flex justify-between w-full">
					<p className="text-semibold24">햄이네 도쿄 여행단</p>
					<div className="flex items-center gap-2">
						<button className="flex p-1 border rounded bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
							<Copy size={14} className="text-zinc-400" />
						</button>
						<p className="text-zinc-400 text-medium14">123456</p>
					</div>
				</div>
				<p className="text-zinc-500 text-medium16">5명이 함께하는 여행</p>
			</div>

			<div
				onClick={() => navigate('/test')}
				className="flex items-center justify-between px-5 py-4 cursor-pointer bg-zinc-800 rounded-xl hover:bg-zinc-700"
			>
				<div className="flex flex-col">
					<p className="text-white text-semibold16">나의 여행 성향은?</p>
					<p className="text-zinc-400 text-medium14">여행 성향 테스트 하러 가기</p>
				</div>
				<Arrow_Long size={20} className="text-zinc-400" />
			</div>

			<div className="flex flex-col w-full">
				<Profile my name="김어진" tendency="지독한 계획충" todos={2} />
				<Profile name="이지은" tendency="말 잘 듣는 무계획충" todos={3} />
				<Profile name="최민호" tendency="관찰자 스타일" todos={0} />
				<Profile name="박수현" tendency="느긋한 여유파" todos={1} />
				<Profile name="정윤호" tendency="리더형 일정 매니저" todos={5} />
			</div>
		</div>
	);
}

export default Group;
