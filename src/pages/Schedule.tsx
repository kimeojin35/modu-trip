import { useState } from 'react';
import { Arrow_Long, Plus } from '../assets';
import { Button, Modal } from '../components';

function Schedule() {
	const startDate = '2025-05-01';
	const endDate = '2025-05-04';
	const [sYear, sMonth, sDay] = startDate.split('-').map(Number);
	const [eYear, eMonth, eDay] = endDate.split('-').map(Number);
	const getDay = new Date(startDate).getDay();
	const [tasks, setTasks] = useState<Record<string, string>>({});
	const [modal, setModal] = useState<{ visible: boolean; key: string } | null>(null);
	const [newTask, setNewTask] = useState('');

	const days = ['일', '월', '화', '수', '목', '금', '토'];
	const time = Array.from({ length: 24 }, (_, i) => i);

	const weekDates = Array.from({ length: 7 }, (_, i) => ({
		day: days[(getDay + i) % 7],
		num: sDay + i,
	}));

	const moveNextWeek = () => {};
	const movePrevWeek = () => {};
	const moveThisWeek = () => {};

	const addTask = () => {
		if (!newTask.trim()) return;
		setTasks((prev) => ({
			...prev,
			[modal!.key]: newTask.trim(),
		}));
		setNewTask('');
		setModal(null);
	};

	return (
		<div className="flex flex-col w-full min-h-screen gap-6 p-6">
			<div className="flex flex-col gap-2 pt-4">
				<p className="text-semibold24">우리의 여행 일정</p>
				<p className="text-zinc-500 text-medium16">본인의 일은 미리미리 끝내놓아요!</p>
			</div>

			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-3">
					<p className="text-medium20">
						{sYear}년 {sMonth}월
					</p>
					<div className="bg-opacity-20 bg-optic-500 px-2.5 py-1 rounded w-fit">
						<p className="text-medium12 text-optic-500">D-19</p>
					</div>
				</div>
				<Button
					onClick={() => setModal({ visible: true, key: '' })}
					type="white"
					icon={<Plus size={22} />}
					title="추가"
				/>
			</div>

			<div className="w-full flex flex-col h-[70vh] border rounded-lg border-zinc-800">
				<div className="sticky flex w-full border-r border-r-zinc-800">
					<div className="flex border-b border-r border-zinc-800">
						<button
							onClick={movePrevWeek}
							className="flex items-center justify-center w-full p-4 hover:bg-zinc-900"
						>
							<Arrow_Long direction="left" size={16} />
						</button>
						<button
							onClick={moveNextWeek}
							className="flex items-center justify-center w-full p-4 border-l hover:bg-zinc-900 border-l-zinc-800"
						>
							<Arrow_Long direction="right" size={16} />
						</button>
					</div>
					<div className="flex w-full border-b border-b-zinc-800">
						{weekDates.map(({ day, num }, idx) => (
							<div
								key={idx}
								className="flex items-center justify-center w-full h-12 text-white border-r border-zinc-800 bg-zinc-900"
							>
								<p className="text-medium14">
									{day} {num}
								</p>
							</div>
						))}
					</div>
				</div>

				<div style={{ scrollbarWidth: 'none' }} className="flex w-full overflow-scroll">
					<div className="border-r w-[110px] border-r-zinc-800 h-fit">
						{time.map((t) => (
							<div key={t} className="flex justify-center pt-4 min-h-32">
								<p className="text-medium14 text-zinc-500">
									{t < 12 ? `오전 ${t}` : `오후 ${t === 12 ? 12 : t - 12}`}시
								</p>
							</div>
						))}
					</div>

					<div className="flex w-full">
						{weekDates.map((date, i) => (
							<div key={i} className="flex flex-col w-full pt-6 border-r h-fit border-r-zinc-800">
								{time.map((t) => {
									const key = `${[sYear, sMonth, date.num].join('-')}-${t}`;
									const task = tasks[key];
									return (
										<div
											key={t}
											className="flex flex-col w-full gap-2 p-2 border-t border-opacity-50 cursor-pointer border-t-zinc-800 min-h-32 hover:bg-zinc-900"
											onClick={() => setModal({ visible: true, key })}
										>
											{task && (
												<div className="flex flex-col w-full text-white border rounded-md bg-optic-500 bg-opacity-10 border-optic-500 border-opacity-5">
													<div className="w-full px-2 py-1.5 border-b text-medium12 border-b-optic-500 border-opacity-10 bg-optic-500 bg-opacity-10">
														{t < 12 ? `오전 ${t}` : `오후 ${t === 12 ? 12 : t - 12}`}시
													</div>
													<div className="w-full p-2">
														<p className="w-full overflow-hidden break-all text-medium14 text-ellipsis line-clamp-3">
															{task}
														</p>
													</div>
												</div>
											)}
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</div>

			{modal && modal.visible && <Modal />}
		</div>
	);
}

export default Schedule;
