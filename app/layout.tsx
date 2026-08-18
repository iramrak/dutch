// Root layout — minimal pass-through.
// The document shell (<html>, <body>, providers, metadata) lives in app/[locale]/layout.tsx.

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}

