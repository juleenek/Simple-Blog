type Props = {};

export const Footer: React.FC<Props> = () => {
  const today = new Date();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};
