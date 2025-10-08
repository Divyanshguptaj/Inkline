'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 gap-8">
      <div className="absolute top-4 right-4">
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="outline">
          Toggle Theme
        </Button>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Shadcn Theme Test Page</h1>
        <p className="text-muted-foreground mt-2">
          Use the button in the top right to toggle between light and dark mode.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>A card with various components inside.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content. It uses the default card foreground color.</p>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <h2 className="text-2xl font-semibold mt-4">Theme Colors</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-primary"></div>
              <span className="text-sm mt-1">Primary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-secondary"></div>
              <span className="text-sm mt-1">Secondary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-accent"></div>
              <span className="text-sm mt-1">Accent</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-muted"></div>
              <span className="text-sm mt-1">Muted</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-destructive"></div>
              <span className="text-sm mt-1">Destructive</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}