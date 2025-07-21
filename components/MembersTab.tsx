"use client";

import { useState } from "react";
import { Plus, Users, UserMinus, Mail } from "lucide-react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { type Trip, useTravelStore } from "@/store/travel-store";
import { AvatarFallback, Avatar } from "@radix-ui/react-avatar";

interface MembersTabProps {
  trip: Trip;
}

export default function MembersTab({ trip }: MembersTabProps) {
  const { addMember, removeMember } = useTravelStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");

  const handleAddMember = () => {
    if (newMemberName.trim() && !trip.members.includes(newMemberName.trim())) {
      addMember(trip.id, newMemberName.trim());
      setNewMemberName("");
      setIsDialogOpen(false);
    }
  };

  const handleRemoveMember = (memberName: string) => {
    if (trip.members.length > 1) {
      removeMember(trip.id, memberName);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (name: string) => {
    const colors = ["blue", "green", "purple", "pink", "orange", "teal"];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="text-gray-900">
          여행 멤버
        </Typography>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="flex gap-2 items-center"
          color="blue"
        >
          <Plus className="w-4 h-4" />
          멤버 추가
        </Button>
      </div>

      {/* 멤버 통계 */}
      <Card>
        <CardBody>
          <div className="flex gap-4 items-center">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <Typography variant="h6" className="text-gray-900">
                총 {trip.members.length}명
              </Typography>
              <Typography variant="small" className="text-gray-600">
                함께 여행하는 친구들
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* 멤버 목록 */}
      <Card>
        <CardBody>
          <Typography variant="h6" className="mb-4">
            멤버 목록
          </Typography>
          <div className="space-y-4">
            {trip.members.map((member, index) => (
              <div
                key={member}
                className="flex justify-between items-center p-3 rounded-lg border"
              >
                <div className="flex gap-3 items-center">
                  <Avatar className={`bg-${getAvatarColor(member)}-500`}>
                    <AvatarFallback>{getInitials(member)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Typography
                      variant="paragraph"
                      className="font-medium text-gray-900"
                    >
                      {member}
                      {index === 0 && (
                        <span className="px-2 py-1 ml-2 text-xs text-blue-800 bg-blue-100 rounded">
                          방장
                        </span>
                      )}
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="flex gap-1 items-center"
                  >
                    <Mail className="w-3 h-3" />
                    초대
                  </Button>
                  {trip.members.length > 1 && index !== 0 && (
                    <Button
                      size="sm"
                      variant="text"
                      color="red"
                      onClick={() => handleRemoveMember(member)}
                    >
                      <UserMinus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* 초대 링크 */}
      <Card>
        <CardBody>
          <Typography variant="h6" className="mb-4">
            친구 초대하기
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography variant="small" className="mb-2 text-gray-600">
                초대 링크
              </Typography>
              <div className="flex gap-2">
                <Input
                  value={`https://travelbuddy.com/invite/${trip.id}`}
                  readOnly
                  className="flex-1"
                  crossOrigin={undefined}
                />
                <Button variant="outlined" color="blue">
                  복사
                </Button>
              </div>
            </div>
            <Typography variant="small" className="text-gray-500">
              이 링크를 친구들에게 공유하여 여행 계획에 초대하세요.
            </Typography>
          </div>
        </CardBody>
      </Card>

      <Dialog
        open={isDialogOpen}
        handler={() => setIsDialogOpen(false)}
        size="sm"
      >
        <DialogHeader>새 멤버 추가</DialogHeader>
        <DialogBody>
          <div>
            <Typography variant="h6" className="mb-2">
              멤버 이름
            </Typography>
            <Input
              placeholder="새 멤버의 이름을 입력하세요"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
              crossOrigin={undefined}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setIsDialogOpen(false)}
            className="mr-1"
          >
            취소
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={handleAddMember}
            disabled={
              !newMemberName.trim() ||
              trip.members.includes(newMemberName.trim())
            }
          >
            추가
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
