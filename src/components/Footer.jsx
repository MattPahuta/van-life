
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-neutral-800">
      <div className="mx-auto max-w-2xl">
        <p className="py-4 text-neutral-100 text-sm font-medium text-center">
          &copy; {year} &#35;VANLIFE
        </p>
      </div>
    </footer>
  );
}

export default Footer;