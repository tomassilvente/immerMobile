export default function SimpleButton({ text, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-[100%] text-center text-2xl bg-primary text-white mt-24 py-5 rounded-full"
    >
      {text}
    </button>
  );
}
