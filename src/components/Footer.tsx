type FooterProps = {
  text: string;
};

export const Footer = ({ text }: FooterProps) => {
  return (
    <footer className="py-4 text-center text-xs text-gray-400">
      <p>{text}</p>
    </footer>
  );
};