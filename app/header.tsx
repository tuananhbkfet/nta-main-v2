'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image' // Thêm import Image

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Nguyễn Tuấn Anh
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Kỹ sư
        </TextEffect>
      </div>
      <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border">
        <Image
          src="/ant_2015_1.png"
          alt="Avatar"
          fill
          className="object-cover"
        />
      </div>
    </header>
  )
}