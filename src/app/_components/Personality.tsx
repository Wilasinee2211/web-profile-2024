import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality(บุคลิกภาพ)">
      <div>
        <p className="text-lg text-zinc-800">ขี้โมโห</p>
        <p className="pb-2 text-zinc-800">
        ขี้โมโห โวยวายเหมือนเด็กผู้ชาย ชื่นชอบการต่อสู้ที่มีความรุนแรง ในฉบับภาพยนตร์ของ “เดอะพาวเวอร์พัฟฟ์เกิลส์” 
        </p>
        <div className="flex gap-1">
          <Badge>Angry</Badge>
          <Badge>Introverted</Badge>
          <Badge>frantic</Badge>
          <Badge>Annoying</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
