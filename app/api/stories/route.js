import { getStories } from "@/utils/storyLoader" 
import { NextResponse } from "next/server";

export async function GET() {
  const stories = await getStories();
  return NextResponse.json(stories);
}