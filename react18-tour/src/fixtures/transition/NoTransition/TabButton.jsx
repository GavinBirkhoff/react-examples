import { useTransition } from "react";

export default function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        // Updating the parent component in a transition
        // startTransition(() => {
        //   onClick();
        // });
        // onClick();
      }}
    >
      {children}
    </button>
  );
}
