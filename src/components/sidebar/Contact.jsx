import React from "react";

const Contact = ({
  id,
  name,
  image,
  selectedContactId,
  setSelectedContactId,
}) => {
  const isSelected = id === selectedContactId;

  return (
    <div
      onClick={()=>setSelectedContactId(id)}
      className={`flex cursor-pointer px-2 py-3 justify-between w-full ${
        isSelected ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex gap-3">
        <img src={image} className="size-16 rounded-full" />
        <div className="flex flex-col justify-center">
          <span className="text-lg">{name}</span>
          <span className="text">Hi How are you?</span>
        </div>
      </div>
      <div className="flex pt-4 text-sm">12:39 pm</div>
    </div>
  );
};

export default Contact;
