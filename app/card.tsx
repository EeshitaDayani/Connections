interface PropType {
  text: String;
}

export default function Card({ text }: PropType) {
  return (
    <div className="w-[82px] h-20 rounded-md bg-slate-200 font-semibold text-center content-center text-md">{text}</div>
  );
}
