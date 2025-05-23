"use client";

export default function Footer() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const date = new Date().getFullYear().toString();

  return (
    <div className="w-64 mx-auto flex gap-2.5">
      <p>© {date} Ryan Fritz</p>
      <p> | </p>
      <p
        className="underline hover:cursor-pointer"
        onClick={() => scrollToTop()}>
        Back to top
      </p>
    </div>
  );
}
