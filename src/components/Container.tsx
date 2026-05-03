export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
      {children}
    </div>
  );
}