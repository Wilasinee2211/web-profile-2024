import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-violet-300 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/mypic.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center text-neutral-800">
        <h1 className="text-2xl font-bold text-zinc-700">Buttercup</h1>
        <p className="text-base text-zinc-700">ปราบเหล่าร้าย ผดุงความยุติธรรม</p>
      </div>

      <div className="py-10 text-center text-zinc-700">" รู้คิด รอบคอบ รับผิดชอบต่อสังคม "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-violet-100 rounded-md text-zinc-700">
        <p>
          <b>Age:</b> 5
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> United States of America
        </p>
      </div>
    </div>
  );
};

export default Profile;
