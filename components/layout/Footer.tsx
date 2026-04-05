import Link from "next/link";
import { loadThemeConfig } from "@/lib/config-loader";
import BackgroundImage from "@/components/ui/BackgroundImage";

export default function Footer() {
  const theme = loadThemeConfig();

  return (
    <footer className="mt-16 border-t border-slate-800">
      <BackgroundImage
        className="py-8"
        imageDesktop={theme.footer.backgroundImage ?? "/images/footer-bg.svg"}
        imageMobile={theme.footer.backgroundImage ?? "/images/footer-bg.svg"}
        fallback={theme.footer.backgroundImage ?? "/images/footer-bg.svg"}
        alt={theme.footer.backgroundAlt ?? "Footer background"}
        backgroundSize={theme.footer.backgroundSize ?? "cover"}
        backgroundPosition={theme.footer.backgroundPosition ?? "bottom right"}
        overlayColor={theme.footer.overlay?.color ?? "#020617"}
        overlayOpacity={theme.footer.overlay?.opacity ?? 0.8}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <div>Maluleke Kurhula Success – Engineering Portfolio</div>
            <div className="text-slate-500">
              Built with Next.js, TypeScript, and a locked MVP blueprint.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/methodology"
              className="text-slate-300 underline-offset-2 hover:text-white hover:underline"
            >
              Methodology
            </Link>
            <span className="text-slate-500">v1 · MVP</span>
            <span className="hidden sm:inline">Designed for recruiters and hiring teams</span>
          </div>
        </div>
      </BackgroundImage>
    </footer>
  );
}

