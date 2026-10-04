import { buildMetadata, RootDocument } from "@/components/layout/RootDocument";

export { viewport } from "@/components/layout/RootDocument";

export const metadata = buildMetadata("uk");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="uk">{children}</RootDocument>;
}
