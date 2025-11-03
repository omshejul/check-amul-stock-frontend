"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex items-center gap-4 pt-6">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={session.user.image || ""}
            alt={session.user.name || "User"}
          />
          <AvatarFallback>
            {session.user.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-medium">{session.user.name}</p>
          <p className="text-sm text-muted-foreground">{session.user.email}</p>
        </div>
      </CardContent>
    </Card>
  );
}
