import React from "react";
import Card from "./common/Card";

type Props = {};

const Education = (props: Props) => {
  return (
    <Card title="Education(การศึกษา)">
      <div className="relative border-l-4 border-violet-900 text-zinc-800">
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-violet-950"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              January 2003
            </time>
            <h2 className="mb-2 text-sm font-semibold"> Pokey Oaks Kindergarten</h2>
          </div>
        </div>
        

      </div>
    </Card>
  );
};

export default Education;
