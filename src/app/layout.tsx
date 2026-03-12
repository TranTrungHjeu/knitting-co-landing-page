import type { Metadata } from "next";
import { Manrope, Lora } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dệt Kim Liên Việt | Chuyên sản xuất & cung cấp vải dệt kim",
  description:
    "Dệt Kim Liên Việt — 12+ năm kinh nghiệm sản xuất, cung cấp vải dệt kim chất lượng cao: vải thun Cotton, Cá Sấu, Rib, Interlock, TC, Nỉ... tại TP. Hồ Chí Minh.",
  keywords: [
    "vải dệt kim",
    "vải thun",
    "vải cá sấu",
    "vải cotton",
    "nhà máy dệt kim",
    "dệt kim liên việt",
    "vải TP HCM",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Dệt Kim Liên Việt | Vải dệt kim chất lượng cao",
    description:
      "Chuyên sản xuất & cung cấp các loại vải dệt kim: Cotton, Cá Sấu, Rib, Interlock, TC, Nỉ... Uy tín hàng đầu TP.HCM.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${manrope.variable} ${lora.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
