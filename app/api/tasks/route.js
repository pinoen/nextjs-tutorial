import prisma from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req) => {
  const tasks = await prisma.task.findMany()

  return NextResponse.json({ data: tasks })
}

export const POST = async (req) => {
  const data = await req.json();
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });

  return NextResponse.json({ data: task });
}