import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function useURL() {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const createUrl = (param: string, value: string) => {
    params.set(param, String(value));
    router.replace(`${currentPath}?${params.toString()}`);
  };

  return { createUrl };
}
