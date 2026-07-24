import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <FontAwesomeIcon
        icon={faSwimmingPool}
        className="size-16 text-secondary mb-6"
      />
      <h1 className="text-8xl font-extrabold text-primary/20">404</h1>
      <h2 className="text-2xl font-bold text-foreground mt-4">
        Looks like you dove into the shallow end
      </h2>
      <p className="text-muted-foreground mt-3 max-w-md">
        This page doesn&apos;t exist — but your dream pool does. Let&apos;s get
        you back to solid ground.
      </p>
      <Link href="/" className="inline-flex mt-8">
        <Button size="lg" className="gap-2">
          <FontAwesomeIcon icon={faSwimmingPool} className="size-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
