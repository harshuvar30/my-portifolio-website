function SkillName({ name }: { name: string }) {
  return (
    <span className="bg-[#f1f5f9] px-2.5 py-2 text-xs font-bold rounded-full m-1.5 hover:bg-purple-100 text-center transform transition-colors duration-200">
      {name}
    </span>
  );
}

export default SkillName;
