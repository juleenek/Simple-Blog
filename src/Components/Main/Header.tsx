type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
    </header>
  );
};
