export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[2rem] border border-border bg-card/75 px-6 py-6 text-sm text-muted-foreground backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">Bright Boadu</p>
          <p>Founder of Venux AI</p>
        </div>
        <p>© {new Date().getFullYear()} Bright Boadu. All rights reserved.</p>
      </div>
    </footer>
  );
}
