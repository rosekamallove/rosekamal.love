import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const signatureRouter = createTRPCRouter({
  sign: protectedProcedure
    .input(
      z.object({
        text: z.string({ required_error: "Text is required" }).min(3),
      })
    )
    .mutation(({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { text } = input;

      return prisma.signature.create({
        data: {
          text,
          author: {
            connect: {
              id: session.user.id,
            },
          },
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;

    const signatures = prisma.signature.findMany({
      include: {
        author: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
    return signatures;
  }),
});
