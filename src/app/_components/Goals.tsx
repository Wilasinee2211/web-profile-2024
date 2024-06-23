import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals(เป้าหมาย)">
      <div>
        <ul className="list-inside list-disc text-zinc-800">
          <li>ปกป้องเมืองทาวน์สวิลล์</li>
          <li>กำจัดเหล่าวายร้าย</li>
          <li>ส่งเสริมคุณธรรมและความยุติธรรม</li>
          <li>ช่วยเหลือคนอื่น ๆ</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
