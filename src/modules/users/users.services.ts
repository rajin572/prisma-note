import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
  const result = prisma.user.create({
    data,
  });
  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
      include: {
        user: true,
      },
    });
    return result;
  } else {
    const result = await prisma.profile.create({
      data,
      include: {
        user: true,
      },
    });
    return result;
  }
};

const getUser = async (): Promise<User[]> => {
  const result = prisma.user.findMany({
    // select: {
    //   id: true,
    //   email: true,
    //   name: true,
    //   role: true,
    // },
  });
  return result;
};
const getSingleUser = async (id: number): Promise<User | null> => {
  const result = prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getProfile = async (): Promise<Profile[]> => {
  const result = await prisma.profile.findMany();
  return result;
};

const getSingleProfile = async (id: number): Promise<Profile | null> => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const UserServices = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUser,
  getSingleUser,
  getProfile,
  getSingleProfile,
};
