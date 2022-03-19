import Image from 'next/image';

const CardSkill = ({
  skill,
}: {
  skill: { site: string; imgname: string; width: number; height: number; title: string };
}): JSX.Element => {
  return (
    <a
      href={skill.site}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-5 p-5 transition duration-300 rounded-3xl md:grayscale hover:grayscale-0 group"
    >
      <Image
        src={`/images/skills/${skill.imgname}`}
        width={skill.width}
        height={skill.height}
        alt={skill.title.toLowerCase()}
      />
      <h3 className="text-xl font-bold transition duration-300 md:opacity-0 group-hover:opacity-100">{skill.title}</h3>
    </a>
  );
};

export default CardSkill;
