import { buildMetadata, RootDocument } from "@/components/layout/RootDocument";

export { viewport } from "@/components/layout/RootDocument";

export const metadata = buildMetadata("ru");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}
