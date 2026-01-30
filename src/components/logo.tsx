import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/newlogo.png"
      alt="Tap Consol Logo"
      width={190}
      height={190}
      priority
    />
  );
}
