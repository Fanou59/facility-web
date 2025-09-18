import ReactQueryProvider from "@/components/providers/react-query-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
