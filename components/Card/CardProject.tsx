import ButtonDot from '../Button/Dot';

type CardProjectProps = {
  title: string;
  description: string;
  techs: string[];
  link: string;
};

const CardProject = (props: CardProjectProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-between p-10 border-2 border-black rounded-3xl">
      <div>
        <h4 className="text-2xl font-bold">{props.title}</h4>
        <p className="mt-5">{props.description}</p>
        <ul className="flex flex-wrap items-center gap-5 mt-10 text-sm font-semibold gap-y-3">
          {props.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <ButtonDot type="button" className="w-full mt-8 hover:bg-pastel-blue">
          See
        </ButtonDot>
      </a>
    </div>
  );
};

export default CardProject;
