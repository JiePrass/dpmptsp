"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItem = {
  id: number;
  title: string;
  href: string;
};

const MENU_TENTANG: MenuItem[] = [
  { id: 1, title: "Kami", href: "/tentang/kami" },
  { id: 2, title: "Tugas Pokok dan Fungsi", href: "/tentang/tupoksi" },
  { id: 3, title: "Struktur Organisasi", href: "/tentang/struktur-organisasi" },
  { id: 4, title: "Penilaian / Penghargaan", href: "/tentang/penghargaan" },
  { id: 5, title: "Perencanaan dan Pelaporan", href: "/tentang/perencanaan" },
  { id: 6, title: "Maklumat Pelayanan", href: "/tentang/maklumat" },
];

interface TentangMenuProps {
  activeId?: number;
}

export function TentangMenu({ activeId }: TentangMenuProps) {
  return (
    <Card className="border shadow-sm rounded-2xl overflow-hidden">
      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-3 border-b">
          Menu Tentang
        </h3>

        <ScrollArea className="h-[350px] pr-4">
          <ul className="space-y-1">
            {MENU_TENTANG.map((item) => {
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg transition-colors group border",
                      isActive
                        ? "bg-primary/10 border-primary/30"
                        : "border-transparent hover:bg-primary/5 hover:border-primary/20"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full transition-transform",
                          isActive
                            ? "bg-primary scale-125"
                            : "bg-gray-300 group-hover:bg-primary group-hover:scale-125"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm md:text-base",
                          isActive
                            ? "text-primary font-semibold"
                            : "text-gray-700 group-hover:text-gray-900 font-medium"
                        )}
                      >
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight
                      className={cn(
                        "w-4 h-4 flex-shrink-0",
                        isActive
                          ? "text-primary"
                          : "text-gray-400 group-hover:text-primary"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
