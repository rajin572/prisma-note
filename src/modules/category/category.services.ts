import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertCategoryIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategories = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  return result;
};
const getSingleCategories = async (id: number): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return result;
};

export const categoryServices = {
  insertCategoryIntoDB,
  getAllCategories,
  getSingleCategories,
};
