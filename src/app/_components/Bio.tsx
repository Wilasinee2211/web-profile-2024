import React from "react";
import Card from "./common/Card";

type Props = {};

const Bio = (props: Props) => {
  return (
    <Card title="Bio(ประวัติย่อ)">
      <div className="text-zinc-800">
      คือเด็กหญิง 5 ขวบ ไว้ผมทวินเทล ผมสีทอง ใส่ชุดสีฟ้า ตาสีฟ้า ชอบอุ้มตุ๊กตา
       บับเบิลส์เด็กสาวที่เรียบร้อยพอ ๆ กับความเอ๋อ เป็นเด็กน่ารักที่สุดในกลุ่มพาวเวอร์พัฟฟ์เกิลส์
        เป็นคนรักสัตว์ รักธรรมชาติ แต่เมื่อบับเบิลส์เกิดโมโหขึ้นมา ไม่สามารถมีใครหยุดยั้งเธอได้ 
        เธอมีความสามารถในการ คุยภาษาสัตว์และภาษาอื่น ๆ เช่น ภาษาสเปน เป็นต้น
      </div>
    </Card>
  );
};

export default Bio;
