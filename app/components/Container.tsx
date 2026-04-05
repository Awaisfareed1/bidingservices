export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto md:px-4 md:py-4 py-4 px-6">
      {children}
    </div>
  );
}