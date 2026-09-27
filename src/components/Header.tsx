type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-white border-b py-4 text-center">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};