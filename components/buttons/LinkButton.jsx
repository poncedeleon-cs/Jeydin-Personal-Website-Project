import Link from "next/link";

function LinkButton({ text, link }) {
  return (
    <Link href={link}>
      <div className={`bg-slate-700 border-gray-300 rounded-md text-center min-w-[75px] hover:bg-slate-500 transition-all px-4 py-2`}>
        <p title={text} className=" text-xl">{text}</p>
      </div>
    </Link>
  );
};

export default LinkButton;