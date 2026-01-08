import { dm_sans } from "@/lib/fonts";

export function TextTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`text-2xl font-bold ${className} ${dm_sans.className}`}
      {...props}
    />
  );
}

export function TextBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`text-sm text-muted-foreground ${className} ${dm_sans.className}`}
      {...props}
    />
  );
}
